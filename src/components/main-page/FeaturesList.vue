<script lang="ts">
import { siteFeatures } from "../../data/texts";

import useToggleModal from "../../api/reference";
import FeaturesModal from "./FeaturesModal.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  setup() {
    gsap.registerPlugin(ScrollTrigger);
  },
  data() {
    return {
      features: siteFeatures,
      activeModalId: {},
    };
  },
  methods: {
    openFeatureModal(role: string): void {
      useToggleModal().openModal(role);
      this.setActiveModalId();
    },

    closeModal(): void {
      useToggleModal().closeModal();
      this.setActiveModalId();
    },

    setActiveModalId(): void {
      this.activeModalId = useToggleModal().activeModalId;
    },
  },
  mounted() {
    gsap.from(".gsap-feature-item", {
      scrollTrigger: {
        trigger: ".gsap-features",
        start: "top center",
        end: "bottom bottom",
        scrub: 2, // smooth scrubbing, takes 2 second to "catch up" to the scrollbar
      },
      opacity: 0,
      y: 5,
      duration: 5,
      delay: 0,
      ease: "Power4.easeOut",
      stagger: {
        each: 1,
        ease: "linear.easeNone",
      },
    });

    gsap.from(".gsap-features-disclaimer", {
      scrollTrigger: {
        trigger: ".gsap-features",
        start: "90% bottom",
        end: "bottom bottom",
        scrub: 5, // smooth scrubbing, takes 5 second to "catch up" to the scrollbar
      },
      opacity: 0,
      duration: 1,
      delay: 0,
      ease: "Power2.easeOut",
    });
  },
  components: { FeaturesModal },
};
</script>

<template>
  <div _FeaturesList class="tw-max-w-custom-letter-spacing tw-px-6 tw-mx-auto">
    <h2 class="tw-text-emerald-800 tw-text-lg tw-mb-8 md:tw-text-2xl">
      Technologie und Eigenschaften der Seite:
    </h2>

    <ul class="tw-text-gray-600">
      <li v-for="feature in (features as IFeature[])" :key="feature.key">
        <div class="gsap-feature-item tw-flex tw-flex-nowrap tw-mb-4">
          <span class="tw-h-0">
            <vue-feather
              type="check-circle"
              class="tw-w-5 tw-mt-[3px]"
            ></vue-feather>
          </span>
          <p class="tw-ml-3">
            <span v-html="feature.text"></span>
            <button
              v-if="feature.detail"
              @click="openFeatureModal(feature.id)"
              title="Mehr Informationen zum Thema"
              class="tw-inline tw-absolute"
            >
              <vue-feather
                type="info"
                class="tw-w-4 tw-ml-1 twc-link"
              ></vue-feather>
            </button>
          </p>
        </div>

        <FeaturesModal
          v-if="activeModalId === feature.id"
          @close="closeModal()"
          :websiteFeature="feature"
        ></FeaturesModal>
      </li>
    </ul>
    <p class="gsap-features-disclaimer tw-text-xs tw-text-gray-500 tw-mt-8">
      Mehr Informationen zu den Stichpunkten können über das Info-Icon
      <vue-feather type="info" class="tw-w-3"></vue-feather> abgerufen werden.
      <br />Durchgestrichene <s>Eigenschaften</s> werden demnächst umgesetzt.
    </p>
  </div>
</template>
