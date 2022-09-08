<template>
  <WaterMark />
  <main>
    <component :is="currentView" />
  </main>
  <FooterBar />
</template>

<script lang="ts">
import ImprintPrivacy from "./pages/ImprintPrivacy.vue";
import MainPage from "./pages/MainPage.vue";
import WaterMark from "./components/page-layout/WaterMark.vue";
import { defineComponent } from "vue";
import FooterBar from "./components/page-layout/FooterBar.vue";

const routes = {
  "/": MainPage,
  "/imprint": ImprintPrivacy,
};

export default defineComponent({
  data() {
    return {
      currentPath: window.location.hash || "/",
    };
  },
  computed: {
    currentView(): string {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  components: {
    WaterMark,
    FooterBar,
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
});
</script>
