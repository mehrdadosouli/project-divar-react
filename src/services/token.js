import api from "src/config/api";
import { getCookie } from "src/utils/cookie";

const getNewToken=async()=>{
   const refreshToken= getCookie('refreshToken')
    try {
        if(!refreshToken){return}
       const res=await api.post('/auth/check-refresh-token',{refreshToken})
            return  res
        
   } catch (error) {
            return error
   }
}

export {getNewToken}