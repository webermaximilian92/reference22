<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".gsap-sdm", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: -100,
    });
  },
};
</script>

<template>
  <div
    _IntroScrollMouse
    class="gsap-sdm sdm twc-center-x tw-block tw-my-auto tw-bottom-32 lg:tw-bottom-20"
  >
    <div
      class="sdm__mouse tw-h-10 tw-w-6 tw-rounded-xl tw-border-2 tw-border-cyan-100 tw-top-44"
    >
      <span
        class="sdm__wheel tw-h-2 tw-w-1 tw-block tw-my-2 tw-mx-auto tw-relative tw-border-2 tw-rounded-sm tw-border-purple-200"
      ></span>
    </div>
    <span
      v-for="index in 3"
      :key="index"
      :class="
        'sdm__arrows sdm__arrows--' +
        index +
        ' tw-block tw-border-r-2 tw-border-b-2 tw--mb-0.5 tw-ml-2 tw-w-2 tw-h-2 tw-border-cyan-100'
      "
    ></span>
  </div>
</template>

<style scoped lang="scss">
.sdm {
  &__mouse {
    animation: mouse-color 2s infinite;
  }

  &__wheel {
    animation: mouse-wheel-move 2s linear infinite;
  }

  &__arrows {
    transform: rotate(45deg);
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
