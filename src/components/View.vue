<template>
    <component :is="currentView"></component>
</template>

<script>

import mitt from 'mitt'

const emitter = mitt();

export default {
    name: 'router-view',
    data() {
        return {
            currentView: {}
        }
    },
    created() {
        const routeObject = this.getRouteObject();
        if (routeObject === undefined) {
            this.currentView = {
                template: `<h2> Not found (404) :(.</h2>`
            }
        } else {
            this.currentView = routeObject.component;
        }
        emitter.on('navigate', () => {
            this.currentView = this.getRouteObject().component;
        });
    },
    methods: {
        getRouteObject() {
            return this.$router.options.routes.find(
                (route) => route.path === window.location.pathname
            );
        }
    }
}
</script>
