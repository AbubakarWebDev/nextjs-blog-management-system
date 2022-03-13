import PaginationItem from "./PaginationItem";

function Pagination({page, limit, total}) {
    const totalPages = Math.ceil(total / limit);
    const prevPage = page - 1;
    const nextPage = page + 1;
    
    return (
        <div className="flex items-center justify-center my-5">
            {prevPage != 0 && <PaginationItem 
                label="Previous"
                active={false}
                page={false}
                href={`/blog/page/${prevPage}`} 
            />}

            {[...Array(totalPages)].map((elem, i) => ( 
                <PaginationItem 
                    key={i + 1}
                    label={i + 1}
                    active={(i + 1) == page}
                    href={`/blog/page/${i + 1}`} 
                />
            ))}

            {nextPage <= totalPages != 0 && <PaginationItem 
                label="Next"
                active={false}
                page={false}
                href={`/blog/page/${nextPage}`}
            />}
        </div>
    );
}

export default Pagination;