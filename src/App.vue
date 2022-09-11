<script lang="ts">
import WaterMark from "@/components/WaterMark.vue";
import FooterBar from "@/components/FooterBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    WaterMark,
    FooterBar,
  },
});
</script>

<template>
  <div class="n-snappy-bg tw-fixed tw-h-full tw-w-full tw-bg-slate-900"></div>

  <header class="tw-z-10 tw-absolute">
    <WaterMark />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer class="tw-bg-slate-900">
    <FooterBar />
  </footer>
</template>
