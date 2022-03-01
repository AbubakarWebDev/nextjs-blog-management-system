import React, { useState } from 'react'

const useForm = () => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        event.persist();

        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }


    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();
        } 
        else {
            alert("There is an Error!");
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm