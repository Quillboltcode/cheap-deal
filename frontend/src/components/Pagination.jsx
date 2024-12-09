const Pagination = (props) => {
    const { totalPosts, postPerPage, setCurrentPage, currentPage } = props;
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo(0, 500)
        }
    }

    const nextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
            window.scrollTo(0, 500)
        }
    }

    return (
        <div className="mt-16 text-center text-black">
            <button onClick={() => prevPage()}>
                Prev
            </button>
            {pages.map((page, index) => {
                return (
                    <>
                        <button key={index}
                            onClick={() => setCurrentPage(page)}
                            className={currentPage === page ? "mx-5 bg-gray-300 w-10" : "mx-3.5"}
                        >
                            {page}
                        </button>
                    </>
                )
            })}
            <button onClick={() => nextPage()}>
                Next
            </button>
        </div>
    );
}

export default Pagination;