<script lang="ts">
import { siteFeatures, type IFeature } from "../../data/texts";

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
      featuresLength: siteFeatures.length,
      currentModal: {},
    };
  },
  methods: {
    openModal(currentId: string, index: number): void {
      this.currentModal = {
        id: currentId,
        index: index,
        isOpen: true,
        isRotating: false,
        isFirstFeatureWithModal: this.isFirstIndexWithModal(index),
        isLastFeatureWithModal: this.isLastIndexWithModal(index),
      };

      // disable document scrolling
      document.body.classList.add("_is-modal-active");
    },

    rotateModalByIndex(index: number = 0, height: number = 0): void {
      this.currentModal = {
        id: this.features[index].id,
        index: index,
        isOpen: true,
        isRotating: true,
        isFirstFeatureWithModal: this.isFirstIndexWithModal(index),
        isLastFeatureWithModal: this.isLastIndexWithModal(index),
        lastHeight: height,
      };
    },

    setPrevModal(height: number): void {
      this.rotateModalByIndex(this.getIndexOfPrevFeatureWithModal(), height);
    },

    setNextModal(height: number): void {
      this.rotateModalByIndex(this.getIndexOfNextFeatureWithModal(), height);
    },

    getCurrentModalIndex(): number {
      return this.features.findIndex((f) => f.id === this.currentModal.id);
    },

    getIndexOfPrevFeatureWithModal(): number {
      for (let i = this.currentModal.index - 1; i >= 0; i--) {
        if (this.features[i].detail) {
          return i;
        }
      }
    },

    getIndexOfNextFeatureWithModal(): number {
      for (let i = this.currentModal.index + 1; i < this.featuresLength; i++) {
        if (this.features[i].detail) {
          return i;
        }
      }
    },

    isFirstIndexWithModal(i: number): boolean {
      return i === this.features.findIndex((f) => !!f.detail);
    },

    isLastIndexWithModal(i: number): boolean {
      return (
        i ===
        this.features.length -
          [...this.features].reverse().findIndex((f) => !!f.detail) -
          1
      );
    },

    modalClosed(): void {
      this.currentModal = {};
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
        scrub: 10, // smooth scrubbing, takes 5 second to "catch up" to the scrollbar
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
      <li
        v-for="(feature, index) in (features as IFeature[])"
        :key="feature.key"
      >
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
              @click="openModal(feature.id, index)"
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
          v-if="currentModal?.id === feature.id"
          @closed="modalClosed()"
          @setPrev="setPrevModal"
          @setNext="setNextModal"
          :websiteFeature="feature"
          :isFirstFeature="currentModal.isFirstFeatureWithModal"
          :isLastFeature="currentModal.isLastFeatureWithModal"
          :isRotating="currentModal.isRotating"
          :lastHeight="currentModal.lastHeight"
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
