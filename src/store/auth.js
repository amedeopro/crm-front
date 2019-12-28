import axios from "axios";

export default {
    namespaced: true,
    state:{
        token: '',
        user: ''
    },
    mutations:{
        //
    },
    actions:{
        async login(_, credentials) {
            axios
                .post("auth/signin", credentials)
                .then(response => {
                    return response;
                })
                .catch(error => {
                    return error;
                });
        }
    }
}
