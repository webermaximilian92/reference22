<template>
  <div
    _FeaturesModal
    @click.self="closeModal"
    class="twc-center tw-fixed tw-z-20 tw-w-[100vw] tw-h-[100vh] tw-bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="_color-invert twc-center tw-w-[90vw] tw-max-w-[800px] tw-h-[70vh] tw-overflow-y-scroll tw-bg-emerald-700 tw-text-white tw-p-10"
    >
      <div>
        <button
          @click="closeModal"
          class="twc-link tw-h-8 tw-sticky tw-bg-emerald-600 tw-left-full tw-top-0"
        >
          <vue-feather type="x" class="tw-w-8"></vue-feather>
        </button>
        <p v-html="feature.text"></p>
        <p v-html="feature.detail"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useToggleModal from "../../api/reference";
import type { IFeature } from "../../data/texts";

export default {
  name: "FeaturesModal",
  props: {
    feature: {} as IFeature,
  },
  setup() {
    const { closeModal, isModalActive } = useToggleModal();

    return {
      closeModal,
      isModalActive,
    };
  },
};
</script>
