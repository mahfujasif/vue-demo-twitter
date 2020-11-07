export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            console.log("Setting user " + user)
            state.user = user;
        }
    },

    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user)
        }
    }
}