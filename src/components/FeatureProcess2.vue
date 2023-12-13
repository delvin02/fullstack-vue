<template>
    <div>
        <div id="container" class="overflow-x-hidden relative h-[200vh]">
            <section class="flex bg-yellow-300 justify-center items-start">
                <div class="w-1/4 h-screen sticky top-[50%] ">
                    <h1 class="  text-center text-5xl font-bold">Feature</h1>
                </div>
                <div class="h-screen">
                    <div class="flex flex-col gap-3 min-h-full bg-gray-200">
                        <div class="my-auto p-10">
                            <h1 class="text-black text-5xl font-bold anim">Syncing Financial Data.</h1>

                            <div class="flex gap-3 anim mt-10">
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod
                                    nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi
                                    volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod
                                    nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi
                                    volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-3 min-h-full bg-gray-200">
                        <div class="my-auto p-10">
                            <h1 class="text-black text-5xl font-bold anim">Syncing Financial Data.</h1>

                            <div class="flex gap-3 anim mt-10">
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod
                                    nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi
                                    volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                                <p class="text-black text-sm">Lorem ipsum dolor sit amet consectetur. Egestas euismod
                                    nec
                                    sit
                                    sed
                                    massa
                                    turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi
                                    volutpat.
                                    Ut
                                    fermentum
                                    lorem morbi quis risus amet urna. Urna egestas lorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

export default {
    name: "FeatureProcessV2",
    mounted() {
        // const container = this.$el.querySelector("#container");
        // const sections = gsap.utils.toArray("#container section");
        // const texts = gsap.utils.toArray(".anim");

        // if (!container || sections.length === 0 || !mask) {
        //     console.error("Required elements not found");
        //     return;
        // }

        // let scrollTween = gsap.to(sections, {
        //     xPercent: -100 * (sections.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: "#container",
        //         container: window, // Use window as the container
        //         pin: true,
        //         scrub: 0.1,
        //         end: "+=3000",
        //         markers: false,
        //         start: 0,
        //         snap: {
        //             snapTo: 1 / (sections.length - 1),
        //             duration: 0.2,
        //             delay: 0.1,
        //         },
        //         onUpdate: (self) => {
        //             const progress = self.progress * 100;
        //         },
        //     },
        // });


        // sections.forEach((section, index) => {
        //     let text = section.querySelectorAll(".anim");
        //     if (text.length === 0) return;

        //     gsap.from(text, {
        //         y: 0,
        //         opacity: 0,
        //         duration: 2,
        //         ease: "elastic",
        //         stagger: 0.1,
        //         scrollTrigger: {
        //             trigger: section,
        //             container: window, // Use window as the container
        //             start: "left center",
        //             markers: false,
        //             snap: {
        //                 snapTo: 1 / (sections.length - 1),
        //                 duration: 0.3,
        //                 delay: 0.1,
        //                 index: index,
        //             },
        //         },
        //     });
        // });
    },
};
</script>


<style scoped>
svg {
    position: absolute;
    top: 10em;
    left: 10vw;
    width: 80vw;
}

.mask {
    width: 0;
}
</style>