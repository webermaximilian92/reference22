export interface IFeature {
  text: string;
  detail?: string;
}

export const introText: string[] = [
  "Eine Kurzreferenz,",
  "basierend auf neuster",
  "2022 Webtechnologie,",
  "von Maximilian Weber.",
];

export const siteFeatures: IFeature[] = [
  {
    text: "single-page vue3-App <i>(Vite, <s>Pinia</s>, TS)</i>",
  },
  {
    text: "Seitenaufrufe und Seitenverlauf organisiert mit <i>vue-router 4</i>",
  },
  {
    text: "kleine <i>SFC</i> Komponenten <i>(vue Single-File-Component)</i>",
    detail: "Mehr Infos",
  },
  {
    text: "<i>HMR</i> für Codeanpassungen, die sofort im Browser sichtbar werden",
    detail: "Mehr Infos",
  },
  {
    text: "organisiert, gebaut, überprüft und getestet von <i>Node18, NPM8, ESLINT, Prettier, <s>Vitest, cypress</s></i>",
    detail: "Mehr Infos",
  },
  {
    text: "optisch verfeinert mit <i>Feather Icons</i> sowie schnell wartbar mit <i>tailwindcss</i> oder alternativ <i>SCSS BEM</i>",
    detail: "Mehr Infos",
  },
  {
    text: "funktioniert auf allen modernen Geräten, dank <i>mobile-first-responsive</i> Umsetzung",
  },
  {
    text: "performante, reaktive Elementbewegungen mit <i>GSAP</i>",
    detail: "Mehr Infos",
  },
  {
    text: "selbst konzeptionierte Layouts, Animationen, Inhalte und Funktionalitäten.",
  },
  {
    text: 'Quellcode aufrufbar über <a target="_blank" href="https://github.com/webermaximilian92/reference22"><i>GitHub</i></a>',
  },
];
