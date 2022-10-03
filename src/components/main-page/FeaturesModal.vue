<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { IFeature } from "../../data/texts";

export default defineComponent({
  name: "FeaturesModal",
  setup() {
    gsap.registerPlugin(ScrollTrigger);
  },
  data() {
    const isClosing = false;
    const isOpening = true;

    return {
      isClosing,
      isOpening,
    };
  },
  props: {
    websiteFeature: { id: "" } as IFeature,
    isFirstFeature: false,
    isLastFeature: false,
    isRotating: false,
    lastHeight: 0,
  },
  emits: ["closed", "setPrev", "setNext"],
  methods: {
    closeModals(): void {
      if (this.isClosing || this.isOpening) {
        return;
      }

      this.isClosing = true;

      // enable document scrolling
      document.body.classList.remove("_is-modal-active");

      gsap.to(".gsap-modal-backdrop", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "Power2.easeOut",
        onComplete: this.$emit,
        onCompleteParams: ["closed"],
      });

      gsap.to(".gsap-modal", {
        opacity: 0,
        y: -100,
        duration: 0.3,
        ease: "Power4.easeIn",
      });
    },

    prevModal(): void {
      gsap.to(".gsap-modal-text", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        ease: "Power4.easeIn",
        onComplete: () => {
          this.$emit("setPrev", this.$refs.modal.clientHeight);
        },
      });
    },

    nextModal(): void {
      gsap.to(".gsap-modal-text", {
        opacity: 0,
        y: -30,
        duration: 0.2,
        ease: "Power4.easeIn",
        onComplete: () => {
          this.$emit("setNext", this.$refs.modal.clientHeight);
        },
      });
    },
  },
  mounted() {
    if (this.isRotating) {
      console.log(this.lastHeight);

      gsap.from(".gsap-modal", {
        height: this.lastHeight > 0 ? this.lastHeight : "auto",
        duration: 0.5,
        ease: "Power4.easeOut",
      });

      gsap.from(".gsap-modal-text", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "Power4.easeOut",
        onComplete: () => {
          this.isOpening = false;
        },
      });

      return;
    }

    gsap.from(".gsap-modal-backdrop", {
      opacity: 0,
      duration: 0.6,
      ease: "Power2.easeOut",
      onComplete: () => {
        this.isOpening = false;
      },
    });

    gsap.from(".gsap-modal", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.15,
      ease: "Power4.easeOut",
    });
  },
});
</script>

<template>
  <div
    _FeaturesModal
    @click.self="closeModals"
    class="gsap-modal-backdrop twc-center tw-overscroll-contain tw-fixed tw-z-50 tw-w-screen tw-h-screen tw-bg-[rgba(0,0,0,0.6)]"
  >
    <div
      class="twc-center tw-flex tw-w-[90vw] tw-max-h-[60vh] tw-max-w-custom-letter-spacing"
    >
      <div
        ref="modal"
        class="gsap-modal _color-invert tw-bg-teal-700 tw-w-full tw-text-white tw-pb-24 tw-pt-10 tw-px-10 tw-shadow-2xl tw-overflow-y-scroll"
      >
        <button
          @click="closeModals"
          class="twc-link tw-h-8 tw-sticky tw-bg-teal-700 tw-left-full tw-top-0 tw-mr-8"
        >
          <vue-feather type="x" class="tw-w-8"></vue-feather>
        </button>
        <div class="gsap-modal-text">
          <h2 v-html="websiteFeature.text"></h2>
          <span v-html="websiteFeature.detail" class="detail-text"></span>
        </div>
      </div>
    </div>

    <button
      v-if="!isFirstFeature"
      @click="prevModal"
      class="twc-center-x tw-absolute tw-text-white tw-h-8 tw-top-12 lg-height:tw-top-[8vh]"
    >
      <vue-feather type="arrow-up-circle" class="tw-w-8"></vue-feather>
    </button>
    <button
      v-if="!isLastFeature"
      @click="nextModal"
      class="twc-center-x tw-absolute tw-text-white tw-h-8 tw-bottom-12 lg-height:tw-bottom-[8vh]"
    >
      <vue-feather type="arrow-down-circle" class="tw-w-8"></vue-feather>
    </button>
  </div>
</template>

<style lang="scss">
.detail-text p {
  @apply tw-mb-5;
}
</style>
