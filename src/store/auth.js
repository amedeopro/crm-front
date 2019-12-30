import axios from "axios";

export default {
    namespaced: true,
    state:{
        token: '',
        user: ''
    },
    mutations:{
        SET_TOKEN(state, token){
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions:{
        async login({ dispatch }, credentials) {
            await axios
                .post("auth/signin", credentials)
                .then(response => {
                    dispatch('attempt', response.data.token)
                    return response;
                })
                .catch(error => {
                    return error;
                });
        },

        async attempt({commit}, token){
            commit('SET_TOKEN', token)

            try{
                let response = await axios.get('auth/me',{
                    headers:{
                        'Authorization': 'Bearer ' + token
                    }
                })
                commit('SET_USER', response.data)
            } catch(e){
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
    }
}
