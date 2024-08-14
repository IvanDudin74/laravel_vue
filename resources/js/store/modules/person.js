export default{
    state: {
        person:
            {
                name : 'denis',
                age : 23,
                weight : 70,
            },
    },

    getters: {
        person: state => {
            return state.person
        }
    },

    actions: {
        getPerson({state, commit, dispatch}, id) {
            axios.get('/api/people/' + id)
                .then(res => {
                    commit('setPerson', res.data.data);
                })
        },
    },

    mutations: {
        setPerson(state, person) {
            state.person = person
        }
    }
}
