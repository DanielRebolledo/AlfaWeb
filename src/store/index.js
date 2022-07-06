import Vue from "vue";
import Vuex from "vuex";
import { coursesModule } from "@/store/Module/courses";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    courses: coursesModule,
  },
});
