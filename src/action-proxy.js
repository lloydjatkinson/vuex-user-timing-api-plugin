// @ts-check

const actionProxy = actions => {
    console.log(actions);
    let proxy = {};

    for (const action in actions) {
        
        proxy[action] = (args, payload) => {
            let promise = undefined;

            console.log('Action started.');
            console.log(action);

            promise = actions[action](args, payload);
    
            if (promise) {
                promise.finally(() => {
                    promise = undefined;
                    console.log('Action (Promise) ended.');
                })
            } else {
                console.log('Action ended.');
            }

            return promise;
        }
    }
    return proxy;
}

export default actionProxy;