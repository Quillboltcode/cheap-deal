import phon1 from './Galaxy_A16_5G_128GB_US318.png'
import phon2 from './Galaxy_S24_FE_256GB_US1028.png'
import phon3 from './Iphone_14_Pro_Max_128GB_US849.png'
import phon4 from './Iphone_15_Pink_128GB_US799.png'
import phon5 from './Vivo_V40_5G_US420.png'
import phon6 from './Xiaomi_Redmi_Note_13_Pro_128GB_US220.png'
import phon7 from './Moto_G85_128GB_US190.png'
import phon8 from './Pixel_7a_128GB_US499.png'
import phon9 from './Pixel_9_Pro_128GB_US999.png'
import phon10 from './Pixel_Fold_128GB_US1799.png'
import phon11 from './Apple_Ipad_Pro_13.png'
import phon12 from './Samsung_Galaxy_Tab_S9_Ultra.png'
import phon13 from './OnePlus_Pad.png'
import phon14 from './Microsoft_Surface_Pro_9.png'
import phon15 from './Amazone_Fire_HD_10.png'
import phon16 from './Amazon_eero_Pro_6E.png'
import phon17 from './ASUS_RT-AX86U_Pro.png'
import phon18 from './Netgear_Orbi_RBK752.png'
import phon19 from './TP-Link_Archer_AX5400_Pro.png'
import phon20 from './TP-Link_Archer_BE550.png'
import data from './data.jpg'


export const packages = [
    {
        id: 1,
        name: 'Galaxy A16 - 5GB Data/ Month',
        image: phon1,
        new_price: 318,
        old_price: 358,
        type: 'device + data',
        des: "Cameras: Triple rear camera setup with a primary sensor around 50MP.Battery:  Expected to feature a large 5000mAh battery with 15W charging."
    },
    {
        id: 11,
        name: 'Apple iPad Pro 13 (2024) - 5GB Data/ Month',
        image: phon11,
        new_price: 318,
        old_price: 358,
        brand: "Iphon",
        type: 'device + data',
        des: "Features: Premium build, supports Apple Pencil Pro and Magic Keyboard."
    },
    {
        id: 2,
        name: 'Galaxy S24 FE - 5GB Data/ Month',
        image: phon2,
        new_price: 1028,
        old_price: 1103,
        type: 'device + data',
        des: "Cameras: Triple rear setup – 50MP (main), 12MP (ultrawide), and 10MP (telephoto, 3x zoom).Battery: 3900mAh with 25W charging."
    },
    {
        id: 3,
        name: 'Iphone 14 Pro Max - 5GB Data/ Month',
        image: phon3,
        new_price: 849,
        old_price: 905,
        brand: "Iphon",
        type: 'device + data',
        des: "Cameras: Triple rear system – 48MP (main), 12MP (ultrawide), 12MP (telephoto, 3x zoom).Battery: 4323mAh, up to 29W charging."
    },
    {
        id: 4,
        name: 'Iphone 15 Pink - 5GB Data/ Month',
        image: phon4,
        new_price: 799,
        old_price: 859,
        brand: "Iphon",
        type: 'device + data',
        des: "Cameras: Dual rear – 48MP (main), 12MP (ultrawide).Battery: 3300mAh with USB-C charging (new in 2023). "
    },
    {
        id: 5,
        name: 'Vivo V40 5G - 5GB Data/ Month',
        image: phon5,
        new_price: 420,
        old_price: 478,
        type: 'device + data',
        des: "Cameras: 50MP primary, ultrawide, and macro sensors.Battery: 5000mAh, 33W fast charging"
    },
    {
        id: 6,
        name: 'Xiaomi Redmi Note 13 Pro - 5GB Data/ Month',
        image: phon6,
        new_price: 220,
        old_price: 273,
        type: 'device + data',
        des: "Cameras: Dual rear – 64MP (main), 13MP (ultrawide).Battery: 4385mAh, 18W charging."
    },
    {
        id: 12,
        name: 'Samsung Galaxy Tab S9 Ultra - 5GB Data/ Month',
        image: phon12,
        new_price: 220,
        old_price: 273,
        type: 'device + data',
        des: "Features: Water-resistant, excellent multitasking."
    },
    {
        id: 7,
        name: 'Moto G85 - 5GB Data/ Month',
        image: phon7,
        new_price: 190,
        old_price: 223,
        type: 'device + data',
        des: "Cameras: Triple rear – upgraded 50MP (main), ultrawide, and telephoto sensors.Approx.Battery: 5000mAh, 30W fast charging."
    },
    {
        id: 8,
        name: 'Pixel 7a - 5GB Data/ Month',
        image: phon8,
        new_price: 499,
        old_price: 530,
        type: 'device + data',
        des: "Cameras: Triple rear setup – 48MP (main), ultrawide, and telephoto.Battery: 4821mAh, 30W charging."
    },
    {
        id: 9,
        name: 'Pixel 9 Pro - 5GB Data/ Month',
        image: phon9,
        new_price: 999,
        old_price: 1050,
        type: 'device + data',
        des: "Cameras: Expected to include a 64MP main sensor.Battery: 4500mAh with 44W fast charging."
    },
    {
        id: 10,
        name: 'Pixel Fold - 5GB Data/ Month',
        image: phon10,
        new_price: 1799,
        old_price: 1859,
        type: 'device + data',
        des: "Cameras: 200MP (main), ultrawide, macro.Battery: 5100mAh, 67W charging."
    },
    {
        id: 13,
        name: 'OnePlus Pad - 5GB Data/ Month',
        image: phon13,
        new_price: 479,
        old_price: 599,
        type: 'device + data',
        des: "Features: Lightweight, great for media consumption."
    },

    {
        id: 14,
        name: 'Pixel Fold - 5GB Data/ Month',
        image: phon14,
        new_price: 999,
        old_price: 1159,
        type: 'device + data',
        des: "Features: Runs Windows 11, versatile for work and play."
    },

    {
        id: 15,
        name: 'Pixel Fold - 5GB Data/ Month',
        image: phon15,
        new_price: 149,
        old_price: 199,
        type: 'device + data',
        des: "Features: Budget-friendly, Alexa integration, expandable storage."
    },
    {
        id: 16,
        name: 'Pixel Fold',
        image: phon10,
        new_price: 1799,
        old_price: 1859,
        type: 'mobile-only',
        des: "Cameras: 200MP (main), ultrawide, macro.Battery: 5100mAh, 67W charging."
    },
    {
        id: 17,
        name: 'OnePlus Pad',
        image: phon13,
        new_price: 479,
        old_price: 599,
        type: 'tablet-only',
        des: "Features: Lightweight, great for media consumption."
    },

    {
        id: 18,
        name: 'Pixel Fold S1',
        image: phon14,
        new_price: 999,
        old_price: 1159,
        type: 'moblie-only',
        des: "Features: Runs Windows 11, versatile for work and play."
    },

    {
        id: 19,
        name: 'OnePlus Pad',
        image: phon15,
        new_price: 149,
        old_price: 199,
        type: 'tablet-only',
        des: "Features: Budget-friendly, Alexa integration, expandable storage."
    },
    {
        id: 20,
        name: 'Amazon eero Pro 6E',
        image: phon16,
        new_price: 300,
        old_price: 359,
        type: 'router-only',
        des: "Features: Built-in Zigbee smart home hub, expandable mesh system, app-based network management."
    },
    {
        id: 21,
        name: 'OnePlus Pad',
        image: phon17,
        new_price: 479,
        old_price: 599,
        type: 'router-only',
        des: "Features: Lightweight, great for media consumption."
    },

    {
        id: 22,
        name: 'ASUS RT-AX86U Pro',
        image: phon18,
        new_price: 250,
        old_price: 299,
        type: 'router-only',
        des: "Features: Adaptive QoS for gaming and streaming, six Ethernet ports, AiMesh support for expanding coverage."
    },

    {
        id: 23,
        name: 'Netgear Orbi RBK752',
        image: phon19,
        new_price: 149,
        old_price: 199,
        type: 'router-only',
        des: "Features: Supports gigabit speeds, good range for multi-floor homes, app-based management."
    },
    {
        id: 24,
        name: 'TP-Link Archer AX5400 Pro',
        image: phon20,
        new_price: 199,
        old_price: 259,
        type: 'router-only',
        des: "Features: Multi-gig Ethernet port, basic parental controls, solid performance for high-speed internet plans. "
    },
    {
        id: 25,
        name: 'Galaxy A16',
        image: phon1,
        new_price: 318,
        old_price: 358,
        type: 'mobile-only',
        des: "Cameras: Triple rear camera setup with a primary sensor around 50MP.Battery:  Expected to feature a large 5000mAh battery with 15W charging."
    },
    {
        id: 26,
        name: 'Apple iPad Pro 13 (2024)',
        image: phon11,
        new_price: 318,
        old_price: 358,
        type: 'mobile-only',
        des: "Features: Premium build, supports Apple Pencil Pro and Magic Keyboard."
    },
    {
        id: 27,
        name: 'Galaxy S24 FE ',
        image: phon2,
        new_price: 1028,
        old_price: 1103,
        type: 'mobile-only',
        des: "Cameras: Triple rear setup – 50MP (main), 12MP (ultrawide), and 10MP (telephoto, 3x zoom).Battery: 3900mAh with 25W charging."
    },
    {
        id: 28,
        name: 'Iphone 14 Pro Max',
        image: phon3,
        new_price: 849,
        old_price: 905,
        type: 'mobile-only',
        des: "Cameras: Triple rear system – 48MP (main), 12MP (ultrawide), 12MP (telephoto, 3x zoom).Battery: 4323mAh, up to 29W charging."
    },
    {
        id: 29,
        name: 'Iphone 15 Pink ',
        image: phon4,
        new_price: 799,
        old_price: 859,
        type: 'mobile-only',
        des: "Cameras: Dual rear – 48MP (main), 12MP (ultrawide).Battery: 3300mAh with USB-C charging (new in 2023). "
    },
    {
        id: 30,
        name: '5BG/ Month',
        image: data,
        new_price: 99,
        old_price: 159,
        type: 'broadband-only',
        des: "5BG/ Month use internert"
    },
    {
        id: 31,
        name: '500 minutes + 10BG/ Month',
        image: data,
        new_price: 189,
        old_price: 299,
        type: 'broadband-only',
        des: "10BG/ Month use internert"
    },
    {
        id: 32,
        name: '1000 SMS + 15BG/ Month ',
        image: data,
        new_price: 360,
        old_price: 439,
        type: 'broadband-only',
        des: "15BG/ Month use internert"
    },
    {
        id: 33,
        name: '500 minutes, 1000 SMS + 25BG/ Month ',
        image: data,
        new_price: 459,
        old_price: 499,
        type: 'broadband-only',
        des: "25BG/ Month use internert"
    },
]

export const deals = [
    {
        id: 34,
        name: 'Packages OnePlus Pad +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon17,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Packages OnePlus Pad +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 35,
        name: 'Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon4,
        new_price: 1990,
        old_price: 2599,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 36,
        name: 'Iphone 14 Pro Max +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon3,
        new_price: 1800,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 37,
        name: 'Galaxy S24 FE +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon2,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 38,
        name: 'Galaxy A16 +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon1,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 34,
        name: 'Packages OnePlus Pad +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon17,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Packages OnePlus Pad +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 35,
        name: 'Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon4,
        new_price: 1990,
        old_price: 2599,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 36,
        name: 'Iphone 14 Pro Max +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon3,
        new_price: 1800,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 37,
        name: 'Galaxy S24 FE +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon2,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 38,
        name: 'Galaxy A16 +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon1,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
]

export const packagesAndDeal = [
    {
        id: 1,
        name: 'Galaxy A16 - 5GB Data/ Month',
        image: phon1,
        new_price: 318,
        old_price: 358,
        brand: "Samsung",
        type: 'device + data',
        des: "Cameras: Triple rear camera setup with a primary sensor around 50MP.Battery:  Expected to feature a large 5000mAh battery with 15W charging."
    },
    {
        id: 11,
        name: 'Apple iPad Pro 13 (2024) - 5GB Data/ Month',
        image: phon11,
        new_price: 318,
        old_price: 358,
        brand: 'Iphon',
        type: 'device + data',
        des: "Features: Premium build, supports Apple Pencil Pro and Magic Keyboard."
    },
    {
        id: 2,
        name: 'Galaxy S24 FE - 5GB Data/ Month',
        image: phon2,
        new_price: 1028,
        old_price: 1103,
        brand: "Samsung",
        type: 'device + data',
        des: "Cameras: Triple rear setup – 50MP (main), 12MP (ultrawide), and 10MP (telephoto, 3x zoom).Battery: 3900mAh with 25W charging."
    },
    {
        id: 3,
        name: 'Iphone 14 Pro Max - 5GB Data/ Month',
        image: phon3,
        new_price: 849,
        old_price: 905,
        brand: 'Iphon',
        type: 'device + data',
        des: "Cameras: Triple rear system – 48MP (main), 12MP (ultrawide), 12MP (telephoto, 3x zoom).Battery: 4323mAh, up to 29W charging."
    },
    {
        id: 4,
        name: 'Iphone 15 Pink - 5GB Data/ Month',
        image: phon4,
        new_price: 799,
        old_price: 859,
        brand: 'Iphon',
        type: 'device + data',
        des: "Cameras: Dual rear – 48MP (main), 12MP (ultrawide).Battery: 3300mAh with USB-C charging (new in 2023). "
    },
    {
        id: 5,
        name: 'Vivo V40 5G - 5GB Data/ Month',
        image: phon5,
        new_price: 420,
        old_price: 478,
        type: 'device + data',
        des: "Cameras: 50MP primary, ultrawide, and macro sensors.Battery: 5000mAh, 33W fast charging"
    },
    {
        id: 6,
        name: 'Xiaomi Redmi Note 13 Pro - 5GB Data/ Month',
        image: phon6,
        new_price: 220,
        old_price: 273,
        type: 'device + data',
        des: "Cameras: Dual rear – 64MP (main), 13MP (ultrawide).Battery: 4385mAh, 18W charging."
    },
    {
        id: 12,
        name: 'Samsung Galaxy Tab S9 Ultra - 5GB Data/ Month',
        image: phon12,
        new_price: 220,
        old_price: 273,
        brand: "Samsung",
        type: 'device + data',
        des: "Features: Water-resistant, excellent multitasking."
    },
    {
        id: 7,
        name: 'Moto G85 - 5GB Data/ Month',
        image: phon7,
        new_price: 190,
        old_price: 223,
        type: 'device + data',
        des: "Cameras: Triple rear – upgraded 50MP (main), ultrawide, and telephoto sensors.Approx.Battery: 5000mAh, 30W fast charging."
    },
    {
        id: 8,
        name: 'Pixel 7a - 5GB Data/ Month',
        image: phon8,
        new_price: 499,
        old_price: 530,
        brand: "Samsung",
        type: 'device + data',
        des: "Cameras: Triple rear setup – 48MP (main), ultrawide, and telephoto.Battery: 4821mAh, 30W charging."
    },
    {
        id: 9,
        name: 'Pixel 9 Pro - 5GB Data/ Month',
        image: phon9,
        new_price: 999,
        old_price: 1050,
        brand: "Samsung",
        type: 'device + data',
        des: "Cameras: Expected to include a 64MP main sensor.Battery: 4500mAh with 44W fast charging."
    },
    {
        id: 10,
        name: 'Pixel Fold - 5GB Data/ Month',
        image: phon10,
        new_price: 1799,
        old_price: 1859,
        brand: "Samsung",
        type: 'device + data',
        des: "Cameras: 200MP (main), ultrawide, macro.Battery: 5100mAh, 67W charging."
    },
    {
        id: 13,
        name: 'OnePlus Pad - 5GB Data/ Month',
        image: phon13,
        new_price: 479,
        old_price: 599,
        type: 'device + data',
        des: "Features: Lightweight, great for media consumption."
    },

    {
        id: 14,
        name: 'Pixel Fold - 5GB Data/ Month',
        image: phon14,
        new_price: 999,
        old_price: 1159,
        type: 'device + data',
        des: "Features: Runs Windows 11, versatile for work and play."
    },

    {
        id: 15,
        name: 'Pixel Fold - 5GB Data/ Month',
        image: phon15,
        new_price: 149,
        old_price: 199,
        type: 'device + data',
        des: "Features: Budget-friendly, Alexa integration, expandable storage."
    },
    {
        id: 16,
        name: 'Pixel Fold',
        image: phon10,
        new_price: 1799,
        old_price: 1859,
        type: 'mobile-only',
        des: "Cameras: 200MP (main), ultrawide, macro.Battery: 5100mAh, 67W charging."
    },
    {
        id: 17,
        name: 'OnePlus Pad',
        image: phon13,
        new_price: 479,
        old_price: 599,
        type: 'tablet-only',
        des: "Features: Lightweight, great for media consumption."
    },

    {
        id: 18,
        name: 'Pixel Fold S1',
        image: phon14,
        new_price: 999,
        old_price: 1159,
        type: 'moblie-only',
        des: "Features: Runs Windows 11, versatile for work and play."
    },

    {
        id: 19,
        name: 'OnePlus Pad',
        image: phon15,
        new_price: 149,
        old_price: 199,
        type: 'tablet-only',
        des: "Features: Budget-friendly, Alexa integration, expandable storage."
    },
    {
        id: 20,
        name: 'Amazon eero Pro 6E',
        image: phon16,
        new_price: 300,
        old_price: 359,
        type: 'router-only',
        des: "Features: Built-in Zigbee smart home hub, expandable mesh system, app-based network management."
    },
    {
        id: 21,
        name: 'OnePlus Pad',
        image: phon17,
        new_price: 479,
        old_price: 599,
        type: 'router-only',
        des: "Features: Lightweight, great for media consumption."
    },

    {
        id: 22,
        name: 'ASUS RT-AX86U Pro',
        image: phon18,
        new_price: 250,
        old_price: 299,
        type: 'router-only',
        des: "Features: Adaptive QoS for gaming and streaming, six Ethernet ports, AiMesh support for expanding coverage."
    },

    {
        id: 23,
        name: 'Netgear Orbi RBK752',
        image: phon19,
        new_price: 149,
        old_price: 199,
        type: 'router-only',
        des: "Features: Supports gigabit speeds, good range for multi-floor homes, app-based management."
    },
    {
        id: 24,
        name: 'TP-Link Archer AX5400 Pro',
        image: phon20,
        new_price: 199,
        old_price: 259,
        type: 'router-only',
        des: "Features: Multi-gig Ethernet port, basic parental controls, solid performance for high-speed internet plans. "
    },
    {
        id: 25,
        name: 'Galaxy A16',
        image: phon1,
        new_price: 318,
        old_price: 358,
        brand: "Samsung",
        type: 'mobile-only',
        des: "Cameras: Triple rear camera setup with a primary sensor around 50MP.Battery:  Expected to feature a large 5000mAh battery with 15W charging."
    },
    {
        id: 26,
        name: 'Apple iPad Pro 13 (2024)',
        image: phon11,
        new_price: 318,
        old_price: 358,
        brand: "Iphon",
        type: 'mobile-only',
        des: "Features: Premium build, supports Apple Pencil Pro and Magic Keyboard."
    },
    {
        id: 27,
        name: 'Galaxy S24 FE ',
        image: phon2,
        new_price: 1028,
        old_price: 1103,
        brand: "Samsung",
        type: 'mobile-only',
        des: "Cameras: Triple rear setup – 50MP (main), 12MP (ultrawide), and 10MP (telephoto, 3x zoom).Battery: 3900mAh with 25W charging."
    },
    {
        id: 28,
        name: 'Iphone 14 Pro Max',
        image: phon3,
        new_price: 849,
        old_price: 905,
        brand: 'Iphon',
        type: 'mobile-only',
        des: "Cameras: Triple rear system – 48MP (main), 12MP (ultrawide), 12MP (telephoto, 3x zoom).Battery: 4323mAh, up to 29W charging."
    },
    {
        id: 29,
        name: 'Iphone 15 Pink ',
        image: phon4,
        new_price: 799,
        old_price: 859,
        brand: 'Iphon',
        type: 'mobile-only',
        des: "Cameras: Dual rear – 48MP (main), 12MP (ultrawide).Battery: 3300mAh with USB-C charging (new in 2023). "
    },
    {
        id: 30,
        name: '5BG/ Month',
        image: data,
        new_price: 99,
        old_price: 159,
        type: 'broadband-only',
        des: "5BG/ Month use internert"
    },
    {
        id: 31,
        name: '500 minutes + 10BG/ Month',
        image: data,
        new_price: 189,
        old_price: 299,
        type: 'broadband-only',
        des: "10BG/ Month use internert"
    },
    {
        id: 32,
        name: '1000 SMS + 15BG/ Month ',
        image: data,
        new_price: 360,
        old_price: 439,
        type: 'broadband-only',
        des: "15BG/ Month use internert"
    },
    {
        id: 33,
        name: '500 minutes, 1000 SMS + 25BG/ Month ',
        image: data,
        new_price: 459,
        old_price: 499,
        type: 'broadband-only',
        des: "25BG/ Month use internert"
    },
    {
        id: 34,
        name: 'Packages OnePlus Pad +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon17,
        new_price: 1890,
        old_price: 1999,
        type: 'broadband-only',
        des: "Packages OnePlus Pad +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 35,
        name: 'Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon4,
        new_price: 1990,
        old_price: 2599,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 36,
        name: 'Iphone 14 Pro Max +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon3,
        new_price: 1800,
        old_price: 1999,
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 37,
        name: 'Galaxy S24 FE +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon2,
        new_price: 1890,
        old_price: 1999,
        brand: "Samsung",
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
    {
        id: 38,
        name: 'Galaxy A16 +  Packages 500 minutes, 1000 SMS + 25BG/ Month',
        image: data,
        image1: phon1,
        new_price: 1890,
        old_price: 1999,
        brand: "Samsung",
        type: 'broadband-only',
        des: "Iphone 15 Pink  +  Packages 500 minutes, 1000 SMS + 25BG/ Month"
    },
]