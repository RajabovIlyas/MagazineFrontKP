import * as axios from "axios";





export const authAPI = {
    sing_in_post(email, password, remember = false) {
        return axios.post(`/sign_in`, {email, password, remember})
            .then(res => res.data)
    },
    logout(Token) {
        return axios.post(`/logout`, {accessToken: Token})
            .then(res => res.data)
    },
    authMe(accessToken) {
        return axios.get(`/auth/me`, {params: {accessToken}})
            .then(res => res.data)
    },
    registration_post(data) {
        return axios.post(`/registration`, data)
            .then(res => res.data)
    },

};

export const computerAPI = {
    getComputers(current = 1, pageSize = 10) {
        return axios.get(`/computers_section`, {params: {current, pageSize}})
            .then(res => res.data)
    },
    getComputer(id) {
        return axios.get(`/computers_section/${id}`)
            .then(res => res.data)
    },
    addComputer(data) {
        return axios.post(`/computers_section`, {...data})
            .then(res => res.data)
    },
    changeComputer(data) {
        console.log(data);
        return axios.put(`/computers_section/${data.id}`, {...data})
            .then(res => res.data);
    },
    deleteComputer(id) {
        return axios.delete(`/computers_section/${id}`)
            .then(res => res.data)
    },
    commentAdd(id,values) {
        return axios.put(`/computers_section/add_comment/${id}`,{...values})
            .then(res => res.data)
    },
};

export const buyAPI = {
    getBuyers() {
        return axios.get(`/buy`)
            .then(res => res.data)
    },
    getBuy(id) {
        return axios.get(`/buy/${id}`)
            .then(res => res.data)
    },
    addBuy(data) {
        return axios.post(`/buy`, {...data})
            .then(res => res.data)
    },
    deleteBuy(id) {
        return axios.delete(`/buy/${id}`)
            .then(res => res.data)
    },
};

export const basketAPI = {
    getBaskets() {
        return axios.get(`/basket`)
            .then(res => res.data)
    },
    getBasket(id) {
        return axios.get(`/basket/${id}`)
            .then(res => res.data)
    },
    addBasket(data) {
        return axios.post(`/basket`, {...data})
            .then(res => res.data)
    },
    deleteBasket(id) {
        return axios.delete(`/basket/${id}`)
            .then(res => res.data)
    },
    buyBasket(_id){
        return axios.delete('/basket/buy/'+_id)
            .then(res=>res.data)
    },
};
