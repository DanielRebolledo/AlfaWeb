import Axios from "axios";

export const coursesModule = {
    namespaced: true,
    state: {
        list: [],
        loading: false,
    },
    mutations: {
        SET_LIST(state, newList) {
            state.list = newList;
        },
        SET_LOADING(state, newLoading) {
            state.loading = newLoading;
        },
    },
    actions: {
        async getAll(context) {
            context.commit("SET_LOADING", true);
            try {
                // const cursos = await fetch("/courses.json").then((response) => response.json());
                const cursos = await Axios.get("/courses.json");
                context.commit("SET_LIST", cursos.data);
            } catch (error) {
                console.error("no carga los cursos", error);
            } finally {
                commit("SET_LOADING", false);
            }
        },
    },
};
