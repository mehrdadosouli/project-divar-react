import React from 'react';
import { cookies } from '../../utils/cookie';
import { checkOtpMSG } from 'src/services/auth';
import { useNavigate } from 'react-router-dom';
import { getProfileUser } from 'src/services/user';
import { useQuery } from '@tanstack/react-query';
import styles from './checkOtpForm.module.css'
const CheckOtpForm = ({code,setCode,mobile,setMobile,setStep}) => {
    const {refetch}=useQuery(['profile'],getProfileUser)

    const navigate=useNavigate()
    const submitHandler=async(e)=>{
        e.preventDefault()
        if(code.length !== 5)return
        const {response,error}=await checkOtpMSG(mobile,code)
        if(response){
            cookies(response.data)
            navigate('/')
            refetch()
        }
        if(error)console.log(error);

    }
    return (
        <div className={styles.form}>
            <form onSubmit={submitHandler}>
                <p>تایید کد اس ام اس شده</p>
                <span>لطفا کد پیامک شده به شماره {mobile} را وارد کنید</span>
                <label htmlFor="input"> کد تایید را وارد کنید</label>
                <input type="text" id="input" value={code} placeholder='کد را وارد کنید' onChange={(e)=>setCode(e.target.value)} />
                <div className={styles.btn}>
                    <button type='button' onClick={()=>setStep(1)} >تغییر شماره</button>
                    <button type='submit'>ارسال</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOtpForm;