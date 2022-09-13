<template>
  <div
    _FeaturesModal
    @click.self="toggleModel"
    class="twc-center tw-fixed tw-z-20 tw-w-[100vw] tw-h-[100vh] tw-bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="_color-invert twc-center tw-w-[90vw] tw-max-w-[800px] tw-h-[70vh] tw-overflow-y-scroll tw-bg-emerald-700 tw-text-white tw-p-10"
    >
      <div>
        <button
          @click="toggleModel"
          class="twc-link tw-h-8 tw-sticky tw-bg-emerald-700 tw-left-full tw-top-0"
        >
          <vue-feather type="x" class="tw-w-8"></vue-feather>
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useToggleModal from "../../api/reference";

export default {
  name: "FeaturesModal",
  setup() {
    const { toggleModel } = useToggleModal();

    function clickDiv() {
      console.log("click");
    }
    return {
      clickDiv,
      toggleModel,
    };
  },
};
</script>
