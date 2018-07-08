const vuexUserTimingApiPlugin = store => {
    console.log('[vuex-user-timing-api-plugin]: Initialised.');
    store.subscribe((mutation, state) => {
        console.log(mutation);
    });

    store.subscribeAction((action, state) => {
        console.log(state);
    });
};

export default vuexUserTimingApiPlugin;