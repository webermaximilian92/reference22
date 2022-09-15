<script>
import ScrollDownMouse from "../components/main-page/IntroScrollMouse.vue";
import PageFeatures from "../components/main-page/FeaturesList.vue";
import IntroText from "../components/main-page/IntroText.vue";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";

export default {
  components: { ScrollDownMouse, PageFeatures, IntroText },
  setup() {
    gsap.registerPlugin(ScrollToPlugin);
  },
  methods: {
    scrollToFeatures: () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: ".gsap-features",
        ease: "Power4.easeOut",
      });
    },
  },
};
</script>

<template>
  <section
    _MainPage
    class="tw-w-full tw-h-screen tw-bg-slate-600 tw-min-h-[550px] tw-relative tw-border-spacing-5 tw-border-slate-900"
  >
    <IntroText />
    <button @click="scrollToFeatures()"><ScrollDownMouse /></button>
  </section>
  <section
    class="gsap-features tw-relative tw-w-full tw-min-h-screen tw-bg-emerald-100 tw-py-[15vh]"
  >
    <PageFeatures />
  </section>
</template>
