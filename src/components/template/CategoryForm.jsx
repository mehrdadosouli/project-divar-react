import React, { useState } from 'react';
import styles from './categoryForm.module.css'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCategory } from 'src/services/admin';
const CategoryForm = () => {
    const queryClient = useQueryClient()
    const [inputs, setInputs] = useState({
        name: '',
        slug: '',
        icon: ''
    })
    const { mutate, data, error } = useMutation(addCategory, {
        onSuccess: () => {
            queryClient.invalidateQueries(['get-category'])
        }
    })
    const changeHandler = (event) => {
        setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!inputs.name || !inputs.slug || !inputs.icon) return;
        mutate(inputs)
        setInputs({
            name: '',
            slug: '',
            icon: ''
        })
    }
    return (
        <div className={styles.admin}>
            <h1>دسته بندی جدید</h1>
            <hr />
            {error ? <p className='bg-red-500 w-full h-[5rem] text-white'>{error}</p> : ""}
            {data?.data ? <p className='bg-red-500 w-full h-[5rem] text-white rounded-xl'>{data.data.message}</p> : ""}
            <form onSubmit={submitHandler} className={styles.form}>
                <div>
                    <label htmlFor="name">اسم دسته بندی</label>
                    <input type="text" id='name' name='name' placeholder='name' value={inputs.name} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="slug">اسلاگ</label>
                    <input type="text" id='slug' name='slug' placeholder='slug' value={inputs.slug} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="icon">آیکون</label>
                    <input type="text" id='icon' name='icon' placeholder='icon' value={inputs.icon} onChange={changeHandler} />
                </div>
                <button type='submit'>ایجاد</button>
            </form>
        </div>
    );
};

export default CategoryForm;