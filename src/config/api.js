import axios from "axios"
import { getNewToken } from "src/services/token"
import { cookies } from "src/utils/cookie"
import { getCookie } from "src/utils/cookie"

const api=axios.create({
    baseURL:'http://localhost:3400/',
    headers:{
        'Content-Type':'application/json'
    }
})

api.interceptors.request.use(req=>{
    const authToken=getCookie('accessToken')
    if(authToken){
        req.headers.Authorization=`Bearer ${authToken}`
        return req
    }
    return req
},(error)=>{
    return Promise.reject(error)
})

api.interceptors.response.use(res=>{
        return res
},async(error)=>{
    const originRequest=error.config
    if(error.response.status == 401 && !originRequest._retry){
        originRequest._retry=true;
        const response=await getNewToken('refreshToken')
        if(!response?.data) return
            cookies(response.data)
            return api(originRequest)
    }
    
})

export default api