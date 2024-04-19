import api from "../config/api"

const sendOtpMSG=async(mobile)=>{
    try{
        const response = await api.post("auth/send-otp",{ mobile })
        return { response }
    }catch (error) {
        return {error}
    }
}

export { sendOtpMSG }