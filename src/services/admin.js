import api from "src/config/api"

const getCategory=()=>{
    const response=api.get('category')
    return response
}

const addCategory=(data)=>api.post("category",data)

const deleteCategory=(id)=>{
    const response=api.delete(`category/${id}`)
    return response
}

export { getCategory , addCategory ,deleteCategory }