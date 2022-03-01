import WithLayout from "../HOC/WithLayout";
import Link from 'next/link'
import { useAuth } from "../contexts/UserContext";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const { signup } = useAuth();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <>
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">BKR BLOG</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>            
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
            <input id='username' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("username", { required: true })} />
          </div>
          {errors.username && <b className='text-sm text-red-500'>* Username Field is required</b>}

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input id='email' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
          </div>
          { 
            errors.email?.type == "required"
            ? <b className='text-sm text-red-500'>* Email Field is Required</b>
            : errors.email?.type == "pattern" 
            ? <b className='text-sm text-red-500'>Email Address is Not Valid</b>
            : null
          }

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
            <input id='password' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("password", { required: true })} />
          </div>
          {errors.password && <b className='text-sm text-red-500'>* Password Field is Required</b>}

          <div className="mt-4">
            <label htmlFor="confirmPassword" className="block text-sm text-gray-800 dark:text-gray-200">Confirm Password</label>
            <input id='confirmPassword' type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("confirmPassword", { required: true, validate: value => value == watch('password') })} />
          </div>
          { 
            errors.confirmPassword?.type == "required"
            ? <b className='text-sm text-red-500'>* Confirm Password Field is Required</b>
            : errors.confirmPassword?.type == "validate" 
            ? <b className='text-sm text-red-500'>Confirm Password is Not Matched</b>
            : null
          }
          
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Register
            </button>
          </div>
        </form>
        
        <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account?  
        <Link href='/login'>
          <a className="font-medium text-gray-700 dark:text-gray-200 hover:underline"> Login</a>
        </Link>
        </p>
      </div>
    </>
  );
}

export default WithLayout(Signup, {title: "Signup"});