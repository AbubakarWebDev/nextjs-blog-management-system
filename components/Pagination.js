function Pagination({page, limit, total}) {

    const totalPages = Math.ceil(total / limit);
    const prevPage = page - 1;
    const nextPage = page + 1;
    
    const getItems = () => {
        const items = [];

        for (let i = 1; i < totalPages + 1; i++) {
            items.push(
                <a key={i} href={`/blog/page/${i}`} className={`px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md inline ${(i == page) ? 'bg-[#3b82f6] text-white' : 'bg-[#F3F4F6]'} dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>{i}</a>
            );
        }

        return items;
    };

    return (
        <div className="flex items-center justify-center my-5">
            {prevPage != 0 && <a href={`/blog/page/${prevPage}`} className="px-4 py-2 mx-1 text-gray-500 capitalize rounded-md dark:bg-gray-900 dark:text-gray-600 bg-[#F3F4F6]">
                <div className="flex items-center -mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>

                    <span className="mx-1">
                        previous
                    </span>
                </div>
            </a>}

            {getItems()}

            {nextPage <= totalPages && <a href={`/blog/page/${nextPage}`} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform rounded-md bg-[#F3F4F6] dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                <div className="flex items-center -mx-1">
                    <span className="mx-1">
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>}
        </div>
    );
}

export default Pagination;