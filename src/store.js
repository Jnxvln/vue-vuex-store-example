import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'https://www.justinkcox.com',
      'http://www.stackoverflow.com',
      'http://www.youtube.com'
    ]
  },
  getters: {
    countLinks: state => state.links.length
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = []
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit('REMOVE_LINK', link)
    },
    removeAll({commit}) {
      commit('REMOVE_ALL');
    }
  }
})
