import * as axios from "axios";


export const authAPI={
    sing_in_post(email,password,remember= false){
    return axios.post(`/sign_in`, {email, password, remember})
        .then(res=>res.data)},
    logout_delete(){
        return axios.delete(`/sign_in`, {})
            .then(res=>res.data)
    }

};

export const computerAPI={
    getComputers(current=1, pageSize=10){
        return axios.get(`/computers_section`,{params:{current,pageSize}})
            .then(res=>res.data)},
    getComputer(id){
        return axios.get(`/computers_section/${id}`)
            .then(res=>res.data)},
    addComputer(data){
        return axios.post(`/computers_section`, {...data})
            .then(res=>res.data)},
};