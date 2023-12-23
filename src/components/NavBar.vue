<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const currentTrigger = ref('')

</script>

<template>
    <div class="sticky">
        <nav class="relative z-20 bg-white w-full md:static md:text-sm md:border-none">
            <div class="items-center gap-x-14 px-4 mx-auto md:flex md:px-8">
                <div class="flex items-center py-3 md:py-5 md:block "><a href="javascript:void(0)" rel="nofollow"><img
                            src="/vite.svg" width="50" height="50" alt="Float UI logo"></a>
                    <div class="md:hidden"><button
                            class="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"><svg
                                xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 "
                    :class="{ 'block': state, 'hidden': !state }">

                    <ul class="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        <li>
                            <router-link to="/"
                                class="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/form"
                                class="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600">Form</router-link>
                        </li>
                        <li>
                            <router-link to="/dunkirk"
                                class="bg-slate-100 p-2 mt-3 rounded hover:shadow-sm hover:bg-slate-300">Dunkirk</router-link>
                        </li>
                        <li>
                            <router-link to="/FeatureProcessV2"
                                class="bg-slate-100 p-2 mt-3 rounded hover:shadow-sm hover:bg-slate-300">Feature Process
                                V2</router-link>
                        </li>

                    </ul>
                </div>
                <div>
                    <div className="hidden md:inline-block px-2">
                        <a href="javascript:void(0)"
                            className="py-3 px-4 text-white font-bold bg-slate-950 hover:opacity-90 hover:text-white rounded-md shadow">
                            Get Started
                        </a>
                    </div>
                    <div className="hidden md:inline-block px-2">
                        <a href="javascript:void(0)"
                            className="py-3 px-4 text-white font-bold bg-yellow-500 hover:opacity-90 hover:text-white rounded-md shadow">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div v-if="state" class="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
            @click="setState(false)"></div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            state: false,
            isMenuOpen: true,
            drapdownState: { isActive: false, idx: null },
            // Other data
        };
    },
    methods: {
        setState(newState) {
            this.state = newState;
        },
    },
};
</script>

<style scoped>
.navigation-menu-content {
    display: block !important;
    /* Force content to always show */
}
</style>
