<template>
  <WaterMark />
  <main><router-view></router-view></main>
  <FooterBar />
</template>

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
