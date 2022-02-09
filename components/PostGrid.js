import Link from 'next/link';

function PostGrid({title, img, slug, date, author, id, description}) {
    return (
    <div id={id} className="max-w-lg m-2 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Link href={`/blog/${slug}`}>
            <a> <img className="object-cover w-full h-64" src={img} alt="Article" /> </a>
        </Link>

        <div className="p-6">
            <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Blog Post</span>
                
                <Link href={`/blog/${slug}`}>
                    <a className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{title}</a>
                </Link>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="object-cover h-10 rounded-full" src={author.img} alt="Avatar" />
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{author.name}</a>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{date}</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PostGrid;