function Input({ id, type, label, register, errors, validation }) {
    return (
        <>
            <div className="mt-6">
                <label htmlFor={id} className="block text-sm text-gray-800 dark:text-gray-200">{label}</label>
                <input id={id} type={type} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register(id, validation)} />
            </div>
            {errors[id] && <b className='text-sm text-red-500'>{errors[id].message}</b>}
        </>
    );
}

export default Input;