<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { defineComponent } from "vue";
import { introText } from "../../data/texts";

export default defineComponent({
  data() {
    return {
      headlines: introText,
    };
  },
  created() {
    this.headlines = this.headlines.map((headline: string) =>
      headline
        .split("")
        .map((c: string) =>
          c === " "
            ? `<span class="tw-inline-block">&nbsp;</span>`
            : `<span class="gsap-intro-text-in tw-inline-block"><span class="gsap-intro-text-out tw-inline-block">${c}</span></span>`
        )
        .join("")
    );
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsap-intro-text-in", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "Power4.easeOut",
      stagger: {
        each: 0.005,
        from: "end",
        ease: "Power4.easeIn",
      },
    });
    gsap.to(".gsap-intro-text-out", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: 1000,
      opacity: 0,
      ease: "Power1.easeIn",
      stagger: {
        each: 0.001,
        from: "end",
        ease: "Power1.easeIn",
      },
    });
  },
});
</script>

<template>
  <h2
    _IntroText
    class="gsap-intro-text-wrapper twc-center tw-w-full tw-max-w-custom-letter-spacing tw-pl-6 tw--mt-12"
  >
    <span
      class="tw-block tw-leading-tight tw-whitespace-nowrap tw-overflow-hidden tw-text-[7vw] tw-opacity-80 tw-text-slate-50 sm:tw-text-5xl sm:tw-leading-tight"
      v-for="headline in headlines"
      :key="headline"
      v-html="headline"
    ></span>
  </h2>
</template>
