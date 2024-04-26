import api from "src/config/api"

 const getProfileUser=async()=>{
    const res=await api.get('/user/whoami')
    if(!res) return false
    return res

}

export {getProfileUser}