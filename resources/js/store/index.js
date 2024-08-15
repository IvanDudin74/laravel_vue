import {createApp} from "vue";
import Vuex from "vuex";
import Person from './modules/person'

const app = createApp({})
app.use(Vuex)

export default new Vuex.Store({
    modules: {
        Person
    }
})
