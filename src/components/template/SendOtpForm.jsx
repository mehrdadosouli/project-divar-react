import React from 'react';
import { sendOtpMSG, checkOtpMSG } from '../../services/auth';
import styles from './sendOtpForm.module.css'
const SendOtpForm = ({ setMobile, mobile, setStep }) => {
    const submitHandler = async (event) => {
        event.preventDefault()
        if (mobile.length === 11) {
            const { response, error } = await sendOtpMSG(mobile)
            if (response) {
                setStep(2)
            }
            if (error) console.log(error.message);
        } else {
            console.log('your must 11 number enter ');
            return
        }
    }
    return (
        <div className={styles.form}>
            <form onSubmit={submitHandler}>
                <p>ورود به حساب کاربری</p>
                <span>برای استفاده از امکانات دیوارء لطفا شماره موبایل خود را وارد کنید .کد تایید به این شماره پیامک خواهد شد</span>
                <label htmlFor="input">شماره موبایل خودرا وارد کنید</label>
                <input type="text" id="input" value={mobile} placeholder='شماره را وارد کنید' onChange={(e) => setMobile(e.target.value)} />
                <button type='submit'>ارسال</button>
            </form>
        </div>
    );
};

export default SendOtpForm; 