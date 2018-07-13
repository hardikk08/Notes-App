import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userAuthData: {}
	},
	actions: {
		USER_AUTH_DATA ({commit, state}, data) {
			commit('USER_AUTH_DATA', data)
		}
	},
	mutations: {
		USER_AUTH_DATA (state, data) {
			state.userAuthData = data
		}
	}
})

export default store
