import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-3 mx-auto lg:flex">
            <div className="flex items-center justify-between">
                <div>
                    <Link href='/'>
                        <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 whitespace-nowrap">BKR BLOG</a>
                    </Link>
                </div>
                
                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className="w-full lg:flex lg:items-center lg:justify-end">
                <div className="flex flex-col px-2 py-3 -mx-4 lg:flex-row lg:mx-0 lg:py-0 text-lg">
                    <Link href='/'>
                        <a className="px-2 py-1 font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Home</a>
                    </Link>
                    <Link href='/services'>
                        <a className="px-2 py-1 font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Services</a>
                    </Link>
                    <Link href='/blog'>
                        <a className="px-2 py-1 font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Blog</a>
                    </Link>
                    <Link href='/about'>
                        <a className="px-2 py-1 font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">About</a>
                    </Link>
                    <Link href='/contact'>
                        <a className="px-2 py-1 font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">Contact</a>
                    </Link>
                </div>
                
                <div className="relative mr-4">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                </div>

                <div className="flex items-center py-2 -mx-1 md:mx-0">
                    <a className="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-4"> Login </a>
                    <a className="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 whitespace-nowrap"> Sign Up </a>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;