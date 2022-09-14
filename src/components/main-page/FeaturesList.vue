<script lang="ts">
import { siteFeatures, type IFeature } from "../../data/texts";

import useToggleModal from "../../api/reference";
import FeaturesModal from "./FeaturesModal.vue";

export default {
  data() {
    return {
      features: siteFeatures,
    };
  },
  setup() {
    const { openModal, isModalActive } = useToggleModal();
    function onToggleModal(role: string) {
      openModal(role);
    }
    return {
      isModalActive,
      openModal,
      onToggleModal,
    };
  },
  components: { FeaturesModal },
};
</script>

<template>
  <div _FeaturesList class="tw-max-w-[800px] tw-px-6 tw-mx-auto">
    <h2 class="tw-text-emerald-800 tw-text-lg tw-mb-8 md:tw-text-2xl">
      Technologie und Eigenschaften der Seite:
    </h2>

    <ul class="tw-text-gray-600">
      <li
        v-for="feature in (features as IFeature[])"
        :key="feature"
        class="tw-flex tw-flex-nowrap tw-mb-4"
      >
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
            @click="onToggleModal(feature.id)"
            title="Mehr Informationen zum Thema"
            class="tw-inline tw-absolute"
          >
            <vue-feather
              type="info"
              class="tw-w-4 tw-ml-1 twc-link"
            ></vue-feather>
          </button>
        </p>
        <FeaturesModal
          v-if="isModalActive(feature.id)"
          :feature="feature"
        ></FeaturesModal>
      </li>
    </ul>
    <p class="tw-text-xs tw-text-gray-500 tw-mt-8">
      Mehr Informationen zu den Stichpunkten können über das Info-Icon
      <vue-feather type="info" class="tw-w-3"></vue-feather> abgerufen werden.
      <br />Durchgestrichene <s>Eigenschaften</s> werden demnächst umgesetzt.
    </p>
  </div>
</template>
