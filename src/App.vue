<template>
    <div id="app">
        <store-component />
    </div>
</template>

<script>
import StoreComponent from './components/store-component.vue';

export default {
    name: 'app',
    components: {
        StoreComponent
    }
};
</script>