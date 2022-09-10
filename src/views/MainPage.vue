<template>
  <section
    class="gsap-intro-trigger tw-w-full tw-h-screen tw-bg-stone-600 tw-min-h-[500px] tw-relative"
  >
    <IntroText />
    <ScrollDownMouse />
  </section>
  <section
    class="tw-relative tw-w-full tw-min-h-screen tw-bg-emerald-500 tw-py-40"
  >
    <PageFeatures />
  </section>
</template>

<script lang="ts">
// or all tools are exported from the "all" file (excluding members-only plugins):

import ScrollDownMouse from "../components/main-page/ScrollDownMouse.vue";
import PageFeatures from "../components/main-page/PageFeatures.vue";
import IntroText from "../components/main-page/IntroText.vue";

export default {
  components: { ScrollDownMouse, PageFeatures, IntroText },
};
</script>

<style scoped></style>
