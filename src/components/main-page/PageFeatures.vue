<script lang="ts">
import { siteFeatures } from "../../data/texts";

export default {
  data() {
    return {
      features: siteFeatures,
    };
  },
};
</script>
<template>
  <div class="tw-max-w-[800px] tw-px-6 tw-mx-auto">
    <h2 class="tw-text-emerald-800 tw-text-lg tw-mb-8 md:tw-text-2xl">
      Technologie und Eigenschaften der Seite:
    </h2>
    <ul class="tw-text-gray-600">
      <li
        v-for="feature in features"
        :key="feature.id"
        class="tw-flex tw-flex-nowrap tw-mb-4"
      >
        <div class="tw-h-0">
          <vue-feather
            type="check-circle"
            class="tw-w-5 tw-mt-[3px]"
          ></vue-feather>
        </div>
        <p class="tw-ml-3">
          <span v-html="feature.text"></span>
          <button
            v-if="feature.detail"
            @click="() => null"
            title="Mehr Informationen zum Thema"
            class="tw-inline tw-absolute"
          >
            <vue-feather
              type="info"
              class="tw-w-4 tw-ml-1 twc-link"
            ></vue-feather>
          </button>
        </p>
      </li>
    </ul>
    <p class="tw-text-xs tw-text-gray-500 tw-mt-8">
      Mehr Informationen zu den Stichpunkten können über das Info-Icon
      <vue-feather type="info" class="tw-w-3"></vue-feather> abgerufen werden.
      <br />Durchgestrichene <s>Eigenschaften</s> werden demnächst umgesetzt.
    </p>
    <!-- 
    <button
      class="twc-center tw-w-24 tw-h-24 tw-rounded-3xl tw-bg-stone-700 tw-text-teal-400 tw-shadow-md tw-transition-all tw-duration-700 tw-ease-in-out hover:tw-shadow-lg hover:tw-scale-105 hover:tw-text-teal-200"
    >
      <vue-feather type="feather" class=""></vue-feather>
    </button> -->
  </div>
</template>
