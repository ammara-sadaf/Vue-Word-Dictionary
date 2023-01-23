import Vue from 'vue'
import Vuex from 'vuex'

// Store Modules
import team from './team'
import user from './user'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        team,
        user,
    },
})
