<template>
    <div>
        <button @click="add">Add Random Number to Store</button>
        <button @click="addPromise">Add Random Number to Store (Promise)</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'StoreComponent',
    methods: {
        ...mapActions([
            'addItem',
            'addItemPromise'
        ]),
        add () {
            this.addItem({ item: Math.random() });
        },
        addPromise () {
            this.addItemPromise({ item: Math.random() });
        }
    }
}
</script>