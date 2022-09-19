<script>
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
        scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: 200,
    });
    gsap.to(".gsap-filter", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      opacity: 0.5,
    });
  },
};
</script>

<template>
  <div
    class="gsap-mountains tw-bg-custom-mountains tw-bg-cover tw-bg-no-repeat tw-bg-bottom tw-w-full tw-h-full tw-absolute tw-min-h-custom-banner"
  ></div>
  <div
    class="gsap-filter tw-bg-slate-600 tw-opacity-90 tw-w-full tw-h-full tw-absolute tw-min-h-custom-banner"
  ></div>
  <section
    _MainPage
    class="tw-w-full tw-h-screen tw-min-h-custom-banner tw-relative tw-border-spacing-5 tw-border-slate-900"
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
