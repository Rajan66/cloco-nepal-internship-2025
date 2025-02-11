import React from 'react'
import { useForm } from 'react-hook-form'

const FormAuthor = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>FormAuthor</div>
    )
}

export default FormAuthor