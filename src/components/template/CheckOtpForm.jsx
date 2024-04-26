import React from 'react';
import { cookies } from '../../utils/cookie';
import { checkOtpMSG } from 'src/services/auth';

const CheckOtpForm = ({code,setCode,mobile,setMobile,setStep}) => {
    const submitHandler=async(e)=>{
        e.preventDefault()
        if(code.length !== 5)return
        const {response,error}=await checkOtpMSG(mobile,code)
        if(response){
            cookies(response.data)
        }
        if(error)console.log(error);

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>تایید کد اس ام اس شده</p>
                <span>لطفا کد پیامک شده به شماره {mobile} را وارد کنید</span>
                <label htmlFor="input"> کد تایید را وارد کنید</label>
                <input type="text" id="input" value={code} placeholder='کد را وارد کنید' onChange={(e)=>setCode(e.target.value)} />
                <button type='button' onClick={()=>setStep(1)} >تغییر شماره</button>
                <button type='submit'>ارسال</button>
            </form>
        </div>
    );
};

export default CheckOtpForm;