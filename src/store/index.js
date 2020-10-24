import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import modules from "./modules/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: state(),
  modules
});

export default store;
