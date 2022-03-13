import Link from 'next/link';
function PaginationItem({href, label, active, page = true}) {
    return (
        <Link href={href}>
            <a className={`px-4 py-2 mx-1 transition-colors duration-200 transform bg-white rounded-md inline ${(active) ? 'bg-[#3b82f6] text-white' : 'bg-[#F3F4F6] text-gray-700'} hover:bg-blue-500 hover:text-white`}>
                {page ? label : (
                    <div className="flex items-center -mx-1">
                        {label == "Previous" ? (
                            <>
                                <svg className="w-6 h-6 mx-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                                </svg>
                                <span className="mx-1">{label}</span>
                            </>
                        ) : (
                        <>
                            <span className="mx-1">{label}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </>

                        )}
                    </div>
                )}
            </a>
        </Link>
    );
}

export default PaginationItem;