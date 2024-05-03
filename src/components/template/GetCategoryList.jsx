import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { deleteCategory ,getCategory} from 'src/services/admin';

const GetCategoryList = () => {
    const queryClient=useQueryClient()
    const {data}=useQuery(['get-category'],getCategory)
    const [info,setInfo]=useState()
    const { mutate } = useMutation(deleteCategory,{
        onSuccess:()=>{
            queryClient.invalidateQueries(['get-category'])
        }
    })
    const deleteHandler = (event,id) => {
        event.preventDefault()
        const findId = data?.data.find(i => i._id === id)
        if (findId) {
            mutate(findId._id)
        } else {
            return
        }
    }
    return (
        <div className='p-10'>
            {
                data ? data.data.map(elem=>(<div className='flex justify-between border-solid border border-gray-600 p-5 my-5' key={elem._id}>
                    <div className='flex gap-10 items-center'>
                        <img src={`${elem.icon}.svg`} alt="" />
                        <p>{elem.name}</p>
                    </div>
                    <div>
                        <button className='p-2 bg-red-300 mx-5 rounded-xl text-white' onClick={(event)=>deleteHandler(event,elem._id)}>DELETE</button>
                        <span>slug: {elem.slug}</span>
                    </div>
                </div>)) : ""
            }
            {

            }
        </div>
    );
};

export default GetCategoryList;