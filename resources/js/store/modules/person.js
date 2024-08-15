

const state = {
    person: null,
    people: null,
}

const getters = {
    person: state => {
        return state.person
    },

    people: state => {
        return state.people
    }
}

const actions = {
        getPerson({state, commit, dispatch}, id) {
            axios.get('/api/people/' + id)
                .then(res => {
                    commit('setPerson', res.data.data);
                })
        },

        getPeople({state, commit, dispatch}) {
            axios.get('/api/people/')
                .then(res => {
                    commit('setPeople', res.data.data)
                    //this.people = res.data.data
                })
        },

        deletePerson({state, commit, dispatch}, id){
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    dispatch('getPeople');
                })
        },

        updatePerson({}, data) {
            axios.patch(`/api/people/${data.id}`,
                {name: data.name, age: data.age, weight: data.weight})
                .then(res => {
                    //this.$router.push({name: 'person.show', params: {id: this.$route.params.id}});
                })
        },

        store({state, commit, dispatch}) {
            axios.post('/api/people', {name: state.person.name, age: state.person.age, weight: state.person.weight})
                .then(res => {
                    //this.$router.push({name: 'person.index'});
                })
        },
    }

const mutations= {
        setPerson(state, person) {
            state.person = person
        },

        setPeople(state, people) {
            state.people = people
        }
    }

export default {
    state, actions, getters, mutations
}
