import axios from "axios";

const base_url="https://contact-m-server.onrender.com"

export const addContact=async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const getContact = async()=>{
    return await axios.get(`${base_url}/contacts`)
}
export const deleteContact = async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}

export const editContact=async(id,data)=>{
    return await axios.put(`${base_url}/contacts/${id}`,data)
}

export const addCategory=async(data)=>{
    return await axios.post(`${base_url}/category`,data)
}
export const getCategory = async()=>{
    return await axios.get(`${base_url}/category`)
}
export const deleteCatagory = async(id)=>{
    return await axios.delete(`${base_url}/category/${id}`)
}

export const getCatCard = async(id)=>{
    return await axios.get(`${base_url}/category?id=${id}`)
}

export const updateCat=async(id,data)=>{
    return await axios.put(`${base_url}/category/${id}`,data)
}

export const checkEmail = async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}

export const addUser=async(data)=>{
    return await axios.post(`${base_url}/users`,data)
}

export const getLogin = async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}
