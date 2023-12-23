<template>
        <div class="container mx-auto">
                <div class="mb-2 flex flex-col items-center sm:mb-6 sm:mt-16">
                        <div class="text-gray-700 theme-black:text-white my-6 sm:my-lg text-center">
                                <h2 class="text-4xl font-bold leading-tight">Trusted by builders.</h2>
                        </div>
                        <div class=" grid w-full grid-cols-2 gap-2 md:grid-cols-4">
                                <div
                                        class="sm:rounded-8 bg-gray-100 theme-black:bg-black flex h-32 flex-col items-center justify-center gap-2 rounded-2xl px-4 py-6 md:px-8 md:py-8">
                                        <span class="text-gray-700 font-bold theme-black:text-grey-3 text-5xl">1 million</span><span
                                                class="text-gray-900 theme-black:text-neutral-400 text-xs md:text-sm leading-tight">transactions
                                                processed</span>
                                </div>
                                <div
                                        class="sm:rounded-8 bg-gray-100 theme-black:bg-black-4 flex h-32 flex-col items-center justify-center gap-2 rounded-2xl px-4 py-6 md:px-8 md:py-8">
                                        <span class="text-gray-700 font-bold theme-black:text-grey-3 text-5xl">40+</span><span
                                                class="text-gray-900 theme-black:text-neutral-400 text-xs md:text-sm leading-tight">Countries</span>
                                </div>
                                <div
                                        class="sm:rounded-8 bg-gray-100 theme-black:bg-black-4 flex h-32 flex-col items-center justify-center gap-2 rounded-2xl px-4 py-6 md:px-8 md:py-8">
                                        <span class="text-gray-700 font-bold theme-black:text-grey-3 text-5xl">275+</span><span
                                                class="text-gray-900 theme-black:text-neutral-400 text-xs md:text-sm leading-tight">Customers</span>
                                </div>
                                <div
                                        class="rounded-2xl sm:rounded-8 flex justify-center bg-gray-100 theme-black:bg-black-4 h-32 overflow-hidden">
                                        <Vue3Marquee class="overflow-x-hidden flex flex-row position relative my-auto">
                                                <div v-for="(image, index) in images" :key="index"  style="--transform: none;">
                                                        <img :src="image" alt="" class="max-w-full h-[2.75rem] opacity-[64%] mr-4 sm:mr-8" />
                                                </div>
                                        </Vue3Marquee>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
        name: "Cards",
        data() {
                return {
                        images: [
                                "https://images.prismic.io/tryotter/0c3de43e-c45b-4df1-afad-f97ad52e38b0_bnj.png?auto=compress%2Cformat&rect=0%2C0%2C224%2C224&w=224&h=224&fit=max",
                                "https://images.prismic.io/tryotter/dbe5834a-dbed-40f0-9e82-e0e25d9a0429_calibbq.png?auto=compress%2Cformat&rect=0%2C0%2C1285%2C480&w=1285&h=480&fit=max",
                                "https://images.prismic.io/tryotter/d0691854-c3b3-44bc-8f58-6cfe95bfb18d_dennys.png?auto=compress%2Cformat&rect=0%2C0%2C400%2C211&w=400&h=211&fit=max",
                                "https://images.prismic.io/tryotter/e2bbe5bf-74e0-4990-89b7-0b08d17c245b_supa.png?auto=compress%2Cformat&rect=0%2C0%2C474%2C166&w=474&h=166&fit=max",
                                "https://images.prismic.io/tryotter/313ec16b-9c2d-4e9b-a66f-b68d2d07a66a_flynn.png?auto=compress%2Cformat&rect=0%2C0%2C990%2C470&w=990&h=470&fit=max",
                                "https://images.prismic.io/tryotter/c0e665ce-3d79-4461-b587-b3d132c10f90_dg.png?auto=compress%2Cformat&rect=0%2C0%2C263%2C238&w=263&h=238&fit=max",
                        ],
                }
        }
}
</script>