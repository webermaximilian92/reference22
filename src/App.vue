<script>
import WaterMark from "@/components/WaterMark.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  components: {
    WaterMark,
    FooterBar,
  },
};
</script>

<template>
  <div
    _App
    class="n-snappy-bg tw--z-10 tw-fixed tw-h-full tw-w-full tw-bg-slate-900"
  ></div>

  <header class="tw-z-10 tw-absolute">
    <WaterMark />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterBar />
  </footer>
</template>
