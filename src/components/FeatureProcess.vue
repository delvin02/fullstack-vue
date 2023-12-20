<script setup>
import { FwbBadge } from 'flowbite-vue'

</script>
<template>
    <div>
        <div id="container">
            <div class="flex flex-col w-[200vw] flex-nowrap">
                <div class="absolute z-20 m-10 w-2  rotate-90">
                    <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                        <path
                            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                            fill="#FFFFFF " />
                        <mask id="mask0_0_1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="900"
                            height="10">
                            height="10">
                            <path
                                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                                fill="#cbd5e1 " />
                        </mask>
                        <g mask="url(#mask0_0_1)">
                            <rect class="mask" y="-49" height="99" fill="black" />
                        </g>
                    </svg>
                </div>

                <div class="slide-container flex sec1 pin">

                    <div class="py-[20vw] px-[10vw] h-1/2 w-[50vw]  z-10 bg-yellow-300 relative">
                        <p class="sticky top-[50%] right-[50%] text-center text-5xl font-bold">Features provided by<br>
                            OneCore Technologies.</p>
                    </div>


                    <div>
                        <div class='absolute blur-[118px] h-[50vw] ml-auto w-full'
                            :style="{ background: this.backgroundGradient, transition: 'background 0.5s ease' }">
                        </div>
                        <section class="flex flex-col p-10 w-[50vw] h-full justify-center">
                            <h1 class="text-black text-5xl font-bold anim">Syncing Financial Data, Seamlessly.</h1>

                            <div class="flex gap-3 anim mt-10">
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section class=" flex flex-col p-10 w-[50vw] h-full justify-center">
                            <h1 class="text-black text-5xl font-bold anim">Eliminate Double Handling, Done. ✅</h1>

                            <div class="flex gap-3 anim mt-10">
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                            </div>
                        </section>
                    </div>
                    <div>
                        <section class=" flex flex-col p-10 w-[50vw] h-full justify-center">
                            <h1 class="text-black text-5xl font-bold anim">Automated Process, Streamlined.</h1>

                            <div class="flex gap-3 anim mt-10">
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <section class="h-screen"></section>
    </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default {
    name: "FeatureProcess",
    data() {
        return {
            // backgroundGradient: 'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
            backgroundGradient: 'rgba(126, 121, 249, 0.3)',
        };
    },
    mounted() {
        const container = this.$el.querySelector("#container");
        const sections = gsap.utils.toArray("#container section");
        const texts = gsap.utils.toArray(".anim");
        const mask = this.$el.querySelector(".mask");

        if (!container || sections.length === 0 || !mask) {
            console.error("Required elements not found");
            return;
        }
        gsap.registerPlugin(ScrollTrigger);

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#container",
                container: window, // Use window as the container
                pin: true,
                scrub: 0.1,
                end: "+=3000",
                markers: false,
                start: 0,
                snap: {
                    snapTo: 1 / (sections.length - 1),
                    duration: 0.2,
                    delay: 0.1,
                },
                onUpdate: (self) => {
                    const progress = self.progress * 100;
                    gsap.to(mask, {
                        trigger: ".wrapper",
                        width: progress + "%",
                        start: "top left",
                        scrub: 1
                    });
                    this.updateBackgroundGradient(self);
                },
            },
        });
        // Add scroll trigger for the updateBackgroundGradient method

        sections.forEach((section, index) => {
            let text = section.querySelectorAll(".anim");
            if (text.length === 0) return;

            gsap.from(text, {
                y: 0,
                opacity: 0,
                duration: 2,
                ease: "elastic",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: section,
                    container: window, // Use window as the container
                    start: "left center",
                    markers: false,
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        duration: 0.3,
                        delay: 0.1,
                        index: index,
                    },
                },
            });
        });


    },
    beforeDestory() {
        ScrollTrigger.removeEventListener('scroll', this.updateBackgroundGradient);
    },
    methods: {
        updateBackgroundGradient(scrollTrigger) {
            const scrollProgress = ~~(scrollTrigger.progress * 60);
            const r = 232 - scrollProgress;
            const g = 121 + scrollProgress;
            const b = 249 - scrollProgress;
            console.log(scrollProgress)
            this.backgroundGradient = `rgba(${r}, ${g}, ${b}, ${scrollTrigger.progress * 0.7})`;
            //this.backgroundGradient = `linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 10%, rgba(14, 165, 233, 0.41) ${scrollProgress}%, rgba(232, 121, 249, 0.26) ${scrollProgress}%, rgba(79, 70, 229, 0.4) ${scrollProgress}%)`;
        },
    },
};
</script>


<style scoped>
svg {
    width: 40vw;
}

.mask {
    width: 0;
}

.slide-container::before,
.slide-container::after {
    content: '';
    display: table;
    clear: both;
}
</style>