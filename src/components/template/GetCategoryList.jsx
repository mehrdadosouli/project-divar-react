import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getCategory } from 'src/services/admin';

const GetCategoryList = () => {
    const {data , isLoading}=useQuery(['get-category'],getCategory)
    useEffect(()=>{

    },[])
    return (
        <div className='p-10'>
            {
                data ? data.data.map(elem=>(<div className='flex justify-between border-solid border border-gray-600 p-5 my-5' key={elem._id}>
                    <div className='flex gap-10 items-center'>
                        <img src={`${elem.icon}.svg`} alt="" />
                        <p>{elem.name}</p>
                    </div>
                    <div>
                        <span>slug: {elem.slug}</span>
                    </div>
                </div>)) : ""
            }
        </div>
    );
};

export default GetCategoryList;