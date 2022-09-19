<script lang="ts">
import WaterMark from "@/components/WaterMark.vue";
import FooterBar from "@/components/FooterBar.vue";
import { useRouter } from "vue-router";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  components: {
    WaterMark,
    FooterBar,
  },
  data() {
    return {
      isImprintView: false,
    };
  },
  setup() {
    gsap.registerPlugin(ScrollToPlugin);
    const router = useRouter();

    router.afterEach(() => {
      gsap.to(window, { duration: 0.7, scrollTo: 0, ease: "Power2.easeInOut" });
    });
  },
  computed: {
    currentRouteName: () => {
      return useRouter().currentRoute.value.path;
    },
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

  <main class="gsap-intro-trigger tw-pt-5">
    <router-view></router-view>
  </main>

  <footer v-if="currentRouteName !== '/impressum'">
    <FooterBar />
  </footer>
</template>
