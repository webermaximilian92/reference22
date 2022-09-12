export interface IFeature {
  id: string;
  text: string;
  detail?: string;
}

export const introText: string[] = [
  "Eine Kurzreferenz,",
  "basierend auf moderner",
  "2022 Webtechnologie,",
  "von Maximilian Weber.",
];

export const siteFeatures: IFeature[] = [
  {
    id: "vue3",
    text: "single-page vue3-App <i>(Vite, <s>Pinia</s>, TS)</i>",
    detail:
      "<a target='_blank' href='https://vuejs.org/'>VueJS3</a> <a target='_blank' href=https://vitejs.dev/'>ViteJS</a> <a target='_blank' href='https://pinia.vuejs.org/'>PiniaJS</a> <a target='_blank' href='https://www.typescriptlang.org/'>Typescript</a>",
  },
  {
    id: "router4",
    text: "Seitenaufrufe und Seitenverlauf organisiert mit <i>vue-router 4</i>",
    detail:
      "<a target='_blank' href='https://router.vuejs.org/'>Vue Router 4</a>",
  },
  {
    id: "sfc",
    text: "kleine <i>SFC</i> Komponenten <i>(vue Single-File-Component)</i>",
    detail:
      "<p>vue Single-File-Component:</p> <p class='tw-mb-5'><code>&lt;script&gt; &lt;template&gt; &lt;style&gt;</code> sind in einer Datei gebündelt.</p> <img class='tw-w-96' src='./sfc.png' />",
  },
  {
    id: "hmr",
    text: "<i>HMR</i> für Codeanpassungen, die sofort im Browser sichtbar werden",
    detail:
      "<p class='tw-mb-5'>Hot Module Replacement:<br> Änderungen (im Beispiel Text und Textfarbe), die am Code vorgenommen wurden, werden sofort im Browser sichtbar (Video in halber Geschwindigkeit)</p> <img src='./hmr.gif' />",
  },
  {
    id: "node",
    text: "organisiert, gebaut, überprüft und getestet von <i>Node18, NPM8, ESLINT, Prettier, <s>Vitest, cypress</s></i>",
    detail:
      "<a target='_blank' href='https://nodejs.org/de/'>Node18</a> <a target='_blank' href='https://www.npmjs.com/'>NPM8</a> <a target='_blank' href='https://eslint.org/'>ESLINT</a> <a target='_blank' href='https://prettier.io/'>Prettier</a> <a target='_blank' href='https://vitest.dev/'>VITEST</a> <a target='_blank' href='https://www.cypress.io/'>Cypress</a>",
  },
  {
    id: "css",
    text: "optisch verfeinert mit <i>Feather Icons</i> sowie schnell wartbar mit <i>tailwindcss</i> oder alternativ <i>SCSS BEM</i>",
    detail:
      "<a target='_blank' href='https://feathericons.com/'>Feather Icons</a> <a target='_blank' href='https://tailwindcss.com/'>tailwindcss</a> <a target='_blank' href='http://getbem.com/'>SCSS BEM</a>",
  },
  {
    id: "responsive",
    text: "funktioniert auf allen modernen Geräten, dank <i>mobile-first-responsive</i> Umsetzung",
  },
  {
    id: "gsap",
    text: "performante, reaktive Elementbewegungen mit <i>GSAP3</i>",
    detail: "<a target='_blank' href='https://greensock.com/gsap/'>GSAP3</a>",
  },
  {
    id: "concept",
    text: "selbst konzeptionierte Layouts, Animationen, Inhalte und Funktionalitäten.",
  },
  {
    id: "github",
    text: 'Quellcode zugänglich auf <a target="_blank" href="https://github.com/webermaximilian92/reference22"><i>GitHub</i></a>',
  },
];
