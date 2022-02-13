import MainLayout from "../components/MainLayout";

function Signup() {
  return (
    <>
      <MainLayout>
        <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">BKR BLOG</h1>
          <form className="mt-6">            
            <div>
              <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
              <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
              </div>
              <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>
          
          <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</a></p>
        </div>
      </MainLayout>
    </>
  );
}

export default Signup;