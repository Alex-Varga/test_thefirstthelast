import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: []
  },
  mutations: {
    SET_CARDS_TO_STATE: (state, cards) => {
      state.cards = cards;
    }
  },
  actions: {
    GET_CARDS_FROM_API({commit}) {
      return axios('https://swapi.dev/api/people', {
        method: 'GET'
      })
      .then((cards) => {
        commit('SET_CARDS_TO_STATE', cards.data.results);
        return cards;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    }
  },
  getters: {
    CARDS(state) {
      return state.cards;
    }
  }
})
