import api from "src/config/api"

 const getProfileUser=async()=>{
    const res=await api.get('/user/whoami')
    return res
}

export {getProfileUser}