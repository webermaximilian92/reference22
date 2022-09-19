<script lang="ts">
import { defineComponent, defineProps } from "vue";
import useToggleModal from "../../api/reference";
export interface IFeature {
  id?: string;
  text?: string;
  detail?: string;
  key?: string;
}

export default defineComponent({
  name: "FeaturesModal",
  props: {
    websiteFeature: {} as IFeature,
  },
  emits: ["close"],
  methods: {
    closeModals(): void {
      this.$emit("close");
    },
  },
});
</script>

<template>
  <div
    _FeaturesModal
    @click.self="closeModals"
    class="twc-center tw-fixed tw-z-20 tw-w-screen tw-h-screen tw-bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="_color-invert twc-center tw-w-[90vw] tw-max-w-custom-letter-spacing tw-max-h-[70vh] tw-overflow-y-scroll tw-bg-emerald-600 tw-text-white tw-p-10"
    >
      <div class="tw-pb-16">
        <button
          @click="closeModals"
          class="twc-link tw-h-8 tw-sticky tw-bg-emerald-600 tw-left-full tw-top-0"
        >
          <vue-feather type="x" class="tw-w-8"></vue-feather>
        </button>
        <p v-html="websiteFeature.text"></p>
        <p v-html="websiteFeature.detail"></p>
      </div>
    </div>
  </div>
</template>
