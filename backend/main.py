import os
from typing import Optional, List, Literal
from datetime import datetime

from fastapi import FastAPI, Body, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from pydantic import ConfigDict, BaseModel, Field, EmailStr
from pydantic.functional_validators import BeforeValidator
from typing_extensions import Annotated

from bson import ObjectId
import motor.motor_asyncio
from pymongo import ReturnDocument

app = FastAPI(
    title="Package Deal API",
    summary="An API for managing packages, deals, and customer preferences in MongoDB."
)

origins = [
    "http://localhost:3000",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# password encryption
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "1f0464bcfbbb8ddbe2b6abafdfce6e6a5d7a47a2e0cbe3a1b0ccd2d1c2d883c0"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30



# export MONGODB_CONNECTION_STRING="mongodb://localhost:27017/cheap-deals" before running
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_CONNECTION_STRING"])
db = client.get_database("cheap-deals")
package_collection = db.get_collection("packages")
deal_collection = db.get_collection("deals")
customer_collection = db.get_collection("customers")

# Represents an ObjectId field in the database.
PyObjectId = Annotated[str, BeforeValidator(str)]

### Package Model
class ServiceModel(BaseModel):
    name: Literal["minutes", "sms", "data"] = Field(...)
    limit: Optional[int] = None  # Limit for minutes or SMS
    unit: Optional[str] = None  # Units for data, e.g., "GB"


class ProductModel(BaseModel):
    device: Literal["Mobile", "Tablet", "Router"] = Field(...)
    model: str = Field(...)
    brand: str = Field(...)


class PackageModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    packageName: str = Field(...)
    type: Literal["default", "custom"] = Field(...)
    category: Literal["Mobile", "Broadband", "Tablet"] = Field(...)
    products: List[ProductModel] = Field(...)
    services: List[ServiceModel] = Field(...)
    image : Optional[bytes] = Field(None, description="image data in bitmap format or gridfs")
    customOptions: Optional[dict] = Field(None)  # For customization limits
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "packageName": "MobileOnly",
                "type": "default",
                "category": "Mobile",
                "products": [{"device": "Mobile", "model": "Model X", "brand": "Brand A"}],
                "services": [
                    {"name": "minutes", "limit": 500},
                    {"name": "sms", "limit": 1000},
                    {"name": "data", "limit": 5, "unit": "GB"}
                ],
                "customOptions": {
                    "isCustomizable": True,
                    "customizationLimitations": {"maxMinutes": 1000, "maxSMS": 2000, "maxDataGB": 10}
                }
            }
        }
    )


### Deal Model
class DealModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    dealName: str = Field(...)
    description: str = Field(...)
    packageOptions: List[PyObjectId] = Field(...)
    price: float = Field(...)
    validity: dict = Field(...)  # Start and end date
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "dealName": "DoublePackage",
                "description": "Combination of two packages",
                "packageOptions": ["603e71a7a6e6e5a1b7a1f1e1", "603e71a7a6e6e5a1b7a1f1e2"],
                "price": 79.99,
                "validity": {"startDate": "2024-01-01", "endDate": "2024-12-31"}
            }
        }
    )

# Token for jwt
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None

### Customer Model
class CustomerModel(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    customerId: str = Field(...)
    name: str = Field(...)
    phoneNumber: str = Field(...)
    email: EmailStr = Field(...)
    hashed_password: str = Field(...)  # New field to store the hashed password
    preferredPackages: List[dict] = Field(...)  # Contains customized packages
    selectedDeals: List[dict] = Field(...)  # Contains deals chosen by the customer
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=True,
        json_schema_extra={
            "example": {
                "customerId": "123456",
                "name": "John Doe",
                "phoneNumber": "+1234567890",
                "email": "john.doe@example.com",
            
                "preferredPackages": [
                    {"packageId": "603e71a7a6e6e5a1b7a1f1e1", "customizedOptions": {"minutes": 800, "sms": 500, "data": 7}}
                ],
                "selectedDeals": [
                    {"dealId": "603e71a7a6e6e5a1b7a1f1e3", "activationDate": "2024-02-01"}
                ]
            }
        }
    )


class CustomerCreate(CustomerModel):
    hashed_password: str = Field(...)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


# Retrieve the user from MongoDB by username or other unique identifier
async def get_user(customer_collection, username: str):
    customer_data = await customer_collection.find_one({"email": username})
    if customer_data is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    return CustomerModel(**customer_data)

### FastAPI Endpoints
@app.post("/packages/", response_model=PackageModel, status_code=status.HTTP_201_CREATED)
async def create_package(package: PackageModel = Body(...)):
    new_package = await package_collection.insert_one(package.model_dump(by_alias=True, exclude=["id"]))
    created_package = await package_collection.find_one({"_id": new_package.inserted_id})
    return created_package


@app.post("/deals/", response_model=DealModel, status_code=status.HTTP_201_CREATED)
async def create_deal(deal: DealModel = Body(...)):
    new_deal = await deal_collection.insert_one(deal.model_dump(by_alias=True, exclude=["id"]))
    created_deal = await deal_collection.find_one({"_id": new_deal.inserted_id})
    return created_deal


@app.post("/customers/", response_model=CustomerCreate, status_code=status.HTTP_201_CREATED)
async def create_customer(customer: CustomerCreate = Body(...)):
    hashed_password = get_password_hash(customer.password)
    customer_data = customer.dict()
    customer_data["hashed_password"] = hashed_password
    customer_data.pop("password")  
    new_customer = await customer_collection.insert_one(customer.model_dump(by_alias=True, exclude=["id"]))
    created_customer = await customer_collection.find_one({"_id": new_customer.inserted_id})
    return created_customer


@app.get("/packages/{id}", response_model=PackageModel)
async def get_package(id: str):
    package = await package_collection.find_one({"_id": ObjectId(id)})
    if package is None:
        raise HTTPException(status_code=404, detail="Package not found")
    return package


@app.get("/deals/{id}", response_model=DealModel)
async def get_deal(id: str):
    deal = await deal_collection.find_one({"_id": ObjectId(id)})
    if deal is None:
        raise HTTPException(status_code=404, detail="Deal not found")
    return deal


@app.get("/customers/{id}", response_model=CustomerModel)
async def get_customer(id: str):
    customer = await customer_collection.find_one({"_id": ObjectId(id)})
    if customer is None:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


@app.put("/packages/{id}", response_model=PackageModel)
async def update_package(id: str, package: PackageModel = Body(...)):
    update_result = await package_collection.find_one_and_update(
        {"_id": ObjectId(id)},
        {"$set": package.model_dump(by_alias=True, exclude_unset=True)},
        return_document=ReturnDocument.AFTER,
    )
    if update_result is None:
        raise HTTPException(status_code=404, detail="Package not found")
    return update_result


@app.delete("/packages/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_package(id: str):
    delete_result = await package_collection.delete_one({"_id": ObjectId(id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Package not found")
    return Response(status_code=status.HTTP_204_NO_CONTENT)
