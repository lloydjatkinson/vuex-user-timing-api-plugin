import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import vuexUserTimingApiPlugin from './vuex-user-timing-api-plugin.js';
import actionProxy from './action-proxy.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        addItem (state, { item }) {
            state.items = [...state.items, item];
        }
    },
    actions: actionProxy({
        addItem ({ commit }, { item }) {
            commit('addItem', { item });
        },
        addItemPromise ({ commit }, { item }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('addItem', { item });
                    resolve();
                }, 2000);
            });
        }
    })
    // plugins: [vuexUserTimingApiPlugin]
});