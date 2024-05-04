import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getCategory } from 'src/services/admin';

const DashboardPage = () => {
    const { data } = useQuery(['get-category'], getCategory)
    const submitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <div className='p-10'>
            <h1 className='mb-5 font-bold text-4xl'>افزودن آگهی</h1>
            <form onSubmit={submitHandler} className='flex flex-col gap-10'>
                <label htmlFor="title">عنوان</label>
                <input type="text" id='title' name='title' className='w-[25%] border border-gray-500 rounded-xl p-1' />
                <label htmlFor="description">توضیحات</label>
                <textarea id='description' className='w-[25%] border border-gray-500 rounded-xl p-1' maxLength={50}></textarea>
                <label htmlFor="price">مبلغ</label>
                <input type="number" id='price' name='price' className='w-[25%] border border-gray-500 rounded-xl p-1' />
                <label htmlFor="city">شهر</label>
                <input type="text" id='city' name='city' className='w-[25%] border border-gray-500 rounded-xl p-1' />
                <label htmlFor="category">دسته بندی</label>
                <select name="category" id="category" className='w-[25%] border border-gray-500 rounded-xl p-2'>
                    {
                        data?.data.map(i => (<option value={i.name}>
                            {i.name}
                        </option>))
                    }
                </select>
                <label htmlFor="file">عکس</label>
                <input type="file" name="file" id="file" className='w-[25%] border border-gray-500 rounded-xl p-1' />
                <button type='submit' className='flex w-[5rem] justify-center text-white p-2 rounded-xl bg-red-600'>ایجاد</button>
            </form>
        </div>
    );
};

export default DashboardPage;