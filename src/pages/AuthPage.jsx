import React, { useState } from 'react';
import SendOtpForm from '../components/template/SendOtpForm';
import CheckOtpForm from '../components/template/CheckOtpForm';

const AuthPage = () => {
    const [step,setStep]=useState(1)
    const [mobile,setMobile]=useState('')
    const [code,setCode]=useState('')

    return (
        <div>
            {step === 1 && <SendOtpForm setMobile={setMobile} mobile={mobile} setStep={setStep} />}
            {step === 2 && <CheckOtpForm setMobile={setMobile} mobile={mobile} setStep={setStep} code={code} setCode={setCode} />}
        </div>
    );
};

export default AuthPage;