<template>
  <div class="list tw-w-3/5 tw-mx-auto">
    <h2 class="list__headline">Technologie und Eigenschaften der Seite:</h2>
    <ul class="list__wrapper">
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          single-page vue3-App (TS, Vite, <s>Pinia</s>)<button
            @click="() => null"
            class="tw-inline"
          >
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          basiert auf kleinen Komponenten aus je einer Datei:
          Single-File-Components (vue SFC)
          <button @click="() => null" class="tw-inline">
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          Verlinkungen über ein vereinfachtes page-routing<button
            @click="() => null"
            class="tw-inline"
          >
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          organisiert, gebaut, überprüft und getestet von Node18, NPM8, ESLINT,
          Prettier, <s>Vitest, cypress</s>
          <button @click="() => null" class="tw-inline">
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          HMR für Codeänderungen, die sofort im Browser sichtbar werden<button
            @click="() => null"
            class="tw-inline"
          >
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          funktioniert auf allen modernen Geräten, dank mobile-first responsive
          Umsetzung
          <button @click="() => null" class="tw-inline">
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          optisch verfeinert mit feather icons sowie schnell wartbar mit
          tailwindcss oder alternativ SCSS BEM
          <button @click="() => null" class="tw-inline">
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          performante, reaktive Elementbewegungen mit GSAP<button
            @click="() => null"
            class="tw-inline"
          >
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          selbst konzeptionierte Layouts, Animationen, Inhalte und
          Funktionalitäten.
          <button @click="() => null" class="tw-inline">
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
      <li>
        <vue-feather type="check-circle" class=""></vue-feather>
        <p>
          Quellcode aufrufbar über
          <a href="https://github.com/webermaximilian92/reference22">GitHub</a
          ><button @click="() => null" class="tw-inline">
            <vue-feather type="info"></vue-feather>
          </button>
        </p>
      </li>
    </ul>

    <button
      class="twc-center tw-w-24 tw-h-24 tw-rounded-3xl tw-bg-stone-700 tw-text-teal-400 tw-shadow-md tw-transition-all tw-duration-700 tw-ease-in-out hover:tw-shadow-lg hover:tw-scale-105 hover:tw-text-teal-200"
    >
      <vue-feather type="feather" class=""></vue-feather>
    </button>
  </div>
</template>

<style scoped lang="scss">
.list__headline {
  @apply tw-text-lg tw-text-emerald-900 tw-mb-8 md:tw-text-2xl;
}

.list__wrapper {
  li {
    @apply tw-flex tw-flex-nowrap tw-mb-2;
  }

  p {
    @apply tw-ml-3;
  }
}
</style>
