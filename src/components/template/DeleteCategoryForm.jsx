import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { deleteCategory ,getCategory } from 'src/services/admin';
const DeleteCategoryForm = () => {
    const queryClient=useQueryClient()
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const { data } = useQuery(['get-category'], getCategory)
    const { mutate,error,data:info } = useMutation(deleteCategory,{
        onSuccess:()=>{
            queryClient.invalidateQueries(['get-category'])
        }
    })
    const submitHandler = (e) => {
        e.preventDefault()
        const findId = category.find(i => i.name === input.trim())
        if (findId) {
            mutate(findId._id)
            setInput('')
        } else {
            return
        }
    }
    useEffect(() => {
        setCategory(data?.data)
    }, [data])
    return (
        <div className='p-[2rem]'>
             {error ? <p>{error}</p> : ""}
           {info?.data ? <p className='bg-red-500 w-[80%] h-[5rem] text-white p-5 rounded-xl'>{info.data.message} </p> : ""}
            <form onSubmit={submitHandler} className='flex flex-col gap-10 p-10'>
                <label htmlFor="category">اسم دسته بندی</label>
                <input className='w-[25%] border border-gray-500 p-2 rounded-xl' value={input} onChange={(e) => setInput(e.target.value)} type="text" name='category' id='category' placeholder='اسم دسته بندی را وارد کنید' />
                <button type='submit' className='flex bg-red-700 text-white p-5 w-[6rem] justify-center rounded-xl'>حذف</button>
            </form>
        </div>
    );
};

export default DeleteCategoryForm;