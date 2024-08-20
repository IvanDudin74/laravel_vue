import router from "../../app"

const state = {
    person: {
        name: null,
        age: null,
        weight: null,
    },
    people: null,
}

const getters = {
    person: state => {
        return state.person
    },

    people: state => {
        return state.people
    },

    isDisabled: state => {
        return !(state.person.name && state.person.age && state.person.weight)
    }
}

const actions = {
        getPerson({state, commit, dispatch}, id) {
            axios.get('/api/people/' + id)
                .then(res => {
                    commit('setPerson', res.data.data);
                })
        },

        getPeople({commit}) {
            axios.get('/api/people/')
                .then(res => {
                    commit('setPeople', res.data.data)
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
                    //router.push({name: 'person.show', params: {id: data.id}});
                })
        },

        store({}, data) {
            axios.post('/api/people', {name: data.name, age: data.age, weight: data.weight})
                .then(res => {
                    //router.push({name: 'person.index'});
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
