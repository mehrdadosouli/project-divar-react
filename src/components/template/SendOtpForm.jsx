import React from 'react';
import { sendOtpMSG , checkOtpMSG } from '../../services/auth';

const SendOtpForm = ({setMobile,mobile,setStep}) => {
    const submitHandler=async(event)=>{
        event.preventDefault()
        if(mobile.length === 11){
           const {response,error}=await sendOtpMSG(mobile)
           if(response){
            setStep(2)
           }
           if(error) console.log(error.message);
        }else{
            console.log('your must 11 number enter ');
            return
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>ورود به حساب کاربری</p>
                <span>لطفا شماره موبایل خود را وارد کنید</span>
                <label htmlFor="input">شماره موبایل</label>
                <input type="text" id="input" value={mobile} placeholder='شماره را وارد کنید' onChange={(e)=>setMobile(e.target.value)} />
                <button type='submit'>ارسال</button>
            </form>
        </div>
    );
};

export default SendOtpForm; 