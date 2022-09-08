<template>
  <div id="sdm" class="sdm twc-center-x tw-block tw-my-auto tw-bottom-20">
    <div
      class="sdm__mouse tw-h-10 tw-w-6 tw-rounded-xl tw-border-2 tw-border-white tw-top-44"
    >
      <div
        class="sdm__wheel tw-h-2 tw-w-1 tw-block tw-my-2 tw-mx-auto tw-relative tw-border-2 tw-rounded-sm tw-border-purple-400"
      ></div>
    </div>
    <div>
      <span class="sdm__arrows sdm__arrows--1"></span>
      <span class="sdm__arrows sdm__arrows--2"></span>
      <span class="sdm__arrows sdm__arrows--3"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".sdm", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: -100,
    });
  },
});
</script>

<style scoped lang="scss">
.sdm {
  &__mouse {
    animation: mouse-color 2s infinite;
  }

  &__wheel {
    animation: mouse-wheel-move 2s linear infinite;
  }

  &__arrows {
    display: block;
    transform: rotate(45deg);

    border-right: 2px solid white;
    border-bottom: 2px solid white;
    margin: 0 0 -2px 8px;

    width: 8px;
    height: 8px;

    animation: mouse-arrow 1s infinite;
    animation-direction: alternate;

    &--1 {
      margin-top: 4px;
    }

    &--2 {
      animation-delay: 0.2s;
    }

    &--3 {
      animation-delay: 0.4s;
    }
  }
}

@keyframes mouse-wheel-move {
  0% {
    top: -2px;
  }
  50% {
    top: 2px;
  }
  100% {
    top: -2px;
  }
}

@keyframes mouse-arrow {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.6;
  }
}

@keyframes mouse-color {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
