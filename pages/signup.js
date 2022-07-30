import Link from 'next/link';
import React, { useState } from "react";
import Alert from '../components/Alert';
import Input from '../components/Input';
import WithLayout from "../HOC/WithLayout";

import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

function Signup() {
  const router = useRouter()
  const { signup } = useAuth();
  const [error, setError] = useState(null);
  const { register, watch, handleSubmit, formState: { errors } } = useForm();

  const form = [
    {
      type: "text",
      id: "username",
      label: "Username",
      errors: errors,
      register: register,
      validation: {
        required: "* Username Field is Required!"
      }
    },
    {
      id: "email",
      type: "text",
      label: "Email",
      register: register,
      errors: errors,
      validation: {
        required: "* Email Field is Required!",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Invalid email address"
        }
      }
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      register: register,
      errors: errors,
      validation: {
        required: "* Password Field is Required!",
        minLength: {
          value: 8,
          message: "Password Must At Least 8 Characters Long!"
        }
      }
    },
    {
      id: "confirmPassword",
      type: "password",
      label: "confirm Password",
      register: register,
      errors: errors,
      validation: {
        required: "* Confirm Password Field is Required!",
        minLength: {
          value: 8,
          message: "Confirm Password Must At Least 8 Characters Long!"
        },
        validate: value => value == watch("password") || "The Passwords do not match!"
      }
    }
  ]

  const onSubmit = async data => {
    setError(null);

    await signup(data.email, data.password).then((userCredential) => {
      const user = userCredential.user;
      router.push('/login');
    })
    .catch(({message}) => {
      setError("Failed to create an account");
      console.log(message);
    });
  }

  return (
    <>
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">BKR BLOG</h1>

        {error && <Alert type='danger' message={error} prefix="Error!" className='mt-6' />}

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          
          {form.map(elem => <Input key={elem.id} {...elem} />)}

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

export default WithLayout(Signup, { title: "Signup" });