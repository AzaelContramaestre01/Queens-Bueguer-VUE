import { createStore } from 'vuex'
import { data } from "/assets/mocks/restaurant.json";

export default createStore({
  state: {
    hello: "Azael's Burguers",
    foods: data,
  },
  getters: {
  },
  modules: {
  }
})
