<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface IFeature {
  id?: string;
  text?: string;
  detail?: string;
  key?: string;
}

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
    websiteFeature: {} as IFeature,
  },
  emits: ["close"],
  methods: {
    closeModals(): void {
      if (this.isClosing || this.isOpening) {
        return;
      }

      this.isClosing = true;

      gsap.to(".gsap-modal-backdrop", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "Power2.easeOut",
        onComplete: this.$emit,
        onCompleteParams: ["close"],
      });

      gsap.to(".gsap-modal", {
        opacity: 0,
        y: -100,
        duration: 0.3,
        delay: 0,
        ease: "Power4.easeIn",
      });
    },
  },
  mounted() {
    gsap.from(".gsap-modal-backdrop", {
      opacity: 0,
      duration: 0.6,
      delay: 0,
      ease: "Power2.easeOut",
      onComplete: () => (this.isOpening = false),
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
    class="gsap-modal-backdrop twc-center tw-fixed tw-z-50 tw-w-screen tw-h-screen tw-bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="twc-center tw-flex tw-w-[90vw] tw-max-h-[70vh] tw-max-w-custom-letter-spacing"
    >
      <div
        class="gsap-modal _color-invert tw-bg-teal-700 tw-w-full tw-text-white tw-pb-24 tw-pt-10 tw-px-10 tw-shadow-2xl tw-overflow-y-scroll"
      >
        <button
          @click="closeModals"
          class="twc-link tw-h-8 tw-sticky tw-bg-teal-700 tw-left-full tw-top-0 tw-mr-6"
        >
          <vue-feather type="x" class="tw-w-8"></vue-feather>
        </button>
        <h2 v-html="websiteFeature.text"></h2>
        <p v-html="websiteFeature.detail"></p>
      </div>
    </div>
  </div>
</template>
