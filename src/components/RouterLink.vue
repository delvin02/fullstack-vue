<!-- router-link.vue -->
<template>
    <a @click="navigate" :href="to">{{ to }}</a>
</template>
  
<script>
import mitt from 'mitt';
const emitter = mitt();

export default {
    name: 'router-link',
    props: {
        to: {
            type: String,
            required: true,
        },
    },
    methods: {
        navigate(evt) {
            evt.preventDefault();
            window.history.pushState(null, null, this.to);
            emitter.emit('navigate');
        },
    },
};
</script>
