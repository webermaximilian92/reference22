<script lang="ts">
import ScrollDownMouse from "../components/main-page/IntroScrollMouse.vue";
import PageFeatures from "../components/main-page/FeaturesList.vue";
import IntroText from "../components/main-page/IntroText.vue";
import { gsap } from "gsap";

export default {
  components: { ScrollDownMouse, PageFeatures, IntroText },
  mounted() {
    gsap.to(".gsap-mountains", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 0, // scrubbing disabled
      },
      y: 200,
    });
    gsap.from(".gsap-filter", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 0, // scrubbing disabled
      },
      opacity: 0.9,
    });
  },
};
</script>

<template>
  <div
    class="gsap-mountains tw-bg-custom-mountains tw-bg-cover tw-bg-no-repeat tw-bg-bottom tw-w-full tw-h-screen tw-max-h-[100vw] tw-min-h-custom-banner tw-absolute"
  ></div>
  <div
    class="gsap-filter tw-bg-slate-600 tw-opacity-0 tw-w-full tw-h-screen tw-min-h-custom-banner tw-max-h-[100vw] tw-absolute"
  ></div>
  <section
    _MainPage
    class="tw-w-full tw-h-screen tw-min-h-custom-banner tw-max-h-[100vw] tw-relative tw-border-spacing-5 tw-border-slate-900"
  >
    <IntroText />
    <ScrollDownMouse />
  </section>
  <section
    class="gsap-features tw-relative tw-w-full tw-min-h-screen tw-bg-emerald-100 tw-py-[15vh]"
  >
    <PageFeatures />
  </section>
</template>

<style lang="scss"></style>
