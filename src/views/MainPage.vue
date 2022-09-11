<script lang="ts">
import ScrollDownMouse from "../components/main-page/ScrollDownMouse.vue";
import PageFeatures from "../components/main-page/PageFeatures.vue";
import IntroText from "../components/main-page/IntroText.vue";

export default {
  components: { ScrollDownMouse, PageFeatures, IntroText },
};
</script>

<template>
  <section
    class="gsap-intro-trigger tw-w-full tw-h-screen tw-bg-stone-600 tw-min-h-[550px] tw-relative tw-top-5 tw-border-spacing-5 tw-border-slate-900"
  >
    <IntroText />
    <ScrollDownMouse />
  </section>
  <section
    class="tw-relative tw-w-full tw-min-h-screen tw-bg-emerald-100 tw-py-[15vh]"
  >
    <PageFeatures />
  </section>
</template>
