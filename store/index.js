/* eslint-disable no-shadow */
export const state = () => ({
  departments: [],
  industries: [],
  cards: [],
  card: {},
});

export const mutations = {
  SET_DEPARTMENTS(state, payload) {
    state.departments = payload;
  },
  SET_INDUSTRIES(state, payload) {
    state.industries = payload;
  },
  SET_CARDS(state, payload) {
    state.cards = payload;
  },
  SET_CARD(state, payload) {
    state.card = payload;
  },
};

export const actions = {
  async FETCH_DEPARTMENTS({ commit }, payload = '') {
    const { data } = await this.$axios(`department/${payload}`);
    commit('SET_DEPARTMENTS', data);
  },
  async FETCH_INDUSTRIES({ commit }, payload = '') {
    const { data } = await this.$axios(`industry/${payload}`);
    commit('SET_INDUSTRIES', data);
  },
  async FETCH_CAREER_CARDS({ commit }, payload = '') {
    const { data } = await this.$axios(`career-cards/${payload}`);
    commit('SET_CARDS', data);
  },
  async FETCH_CARD({ commit }, id) {
    const { data } = await this.$axios(`career-cards/${id}`);
    commit('SET_CARD', data);
  },
};
