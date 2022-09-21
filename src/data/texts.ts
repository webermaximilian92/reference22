export const introText: string[] = [
  "Kurzreferenz v0.9,",
  "basierend auf moderner",
  "2022 Webtechnologie,",
  "von Maximilian Weber.",
];

export const siteFeatures: IFeature[] = [
  {
    id: "vue3",
    text: "single-page vue3-App <i>(Vite, <s>Pinia</s>, TS)</i>",
    detail:
      "<p>Die Inhalte und Seiten einer single-page App werden dynamisch bereitgestellt, d.h. es wird nur ein Einstiegspunkt geladen und alles Andere wird reaktiv generiert, auch bei einem Pfadwechsel/interne Verlinkung (z.B. Impressum).</p><a target='_blank' href='https://vuejs.org/'>VueJS3</a> <a target='_blank' href=https://vitejs.dev/'>ViteJS</a> <a target='_blank' href='https://pinia.vuejs.org/'>PiniaJS</a> <a target='_blank' href='https://www.typescriptlang.org/'>Typescript</a>",
  },
  {
    id: "router4",
    text: "Seitenaufrufe und Seitenverlauf organisiert mit <i>vue-router 4</i>",
    detail:
      "<p>Der Router einer single-page App organisiert das dynamische Nachladen der aufgerufenen Seiten.</p><a target='_blank' href='https://router.vuejs.org/'>Vue Router 4</a>",
  },
  {
    id: "sfc",
    text: "kleine <i>SFC</i> Komponenten <i>(vue Single-File-Component)</i>",
    detail:
      "<p>vue Single-File-Component:</p> <p class='tw-mb-5'><code>&lt;script&gt; &lt;template&gt; &lt;style&gt;</code> sind in einer Datei gebündelt. Das bietet Vorteile, solange man die Komponenten, wie vorgesehen, klein hält.</p> <img class='tw-w-96' src='./sfc.png' />",
  },
  {
    id: "hmr",
    text: "<i>HMR</i> für Codeanpassungen, die sofort im Browser sichtbar werden",
    detail:
      "<p class='tw-mb-5'>Hot Module Replacement:<br> Zeiteinsparung, da Änderungen (im Beispiel Text und Textfarbe), die am Code vorgenommen wurden, sofort im Browser sichtbar werden. (Video in halber Geschwindigkeit).</p> <img src='./hmr.gif' />",
  },
  {
    id: "node",
    text: "organisiert, gebaut, überprüft und getestet von <i>Node18, NPM8, ESLINT, Prettier, <s>Vitest, cypress</s></i>",
    detail:
      "<p>Die App bleibt, dank des node package managers, leicht durch weitere Technologien erweiterbar. Sogenannte Linter und Code-Formatierer überprüfen einen Großteil der Codequalität mit Hinweisen oder automatisierten Anpassungen. Der Code bleibt einheitlich lesbar und mögliche Laufzeitfehler werden dank TS-checks von ESLINT schon im Editor und Bauvorgang des Terminals markiert und abgefangen. Unittest kontrollieren die Funktionalität ausgewählter Methoden/Funktionen und Ende zu Ende Tests überprüfen die App auf ihre Funktionalitäten.</p><a target='_blank' href='https://nodejs.org/de/'>Node18</a> <a target='_blank' href='https://www.npmjs.com/'>NPM8</a> <a target='_blank' href='https://eslint.org/'>ESLINT</a> <a target='_blank' href='https://prettier.io/'>Prettier</a> <a target='_blank' href='https://vitest.dev/'>VITEST</a> <a target='_blank' href='https://www.cypress.io/'>Cypress</a>",
  },
  {
    id: "css",
    text: "optisch verfeinert mit <i>Feather Icons</i> sowie schnell wartbar mit <i>tailwindcss</i> oder alternativ <i>SCSS BEM</i>",
    detail:
      "<p>Feather Icons bietet ein umfangreiches, aufeinander abgestimmtes Icon Set.</p> <p>Tailwind vereint eine Fülle an Vorteilen. Leider leidet die Lesbarkeit des Templates an Tailwinds generischen Klassennamen. Um dem entgegenzuwirken, wurden einigen Elementen Attributnamen zugewiesen, die keine weitere Funktion haben als die Struktur lesbarer zu gestalten. z.B. '_IntroText'</p><p>BEM entspricht dem absoluten Gegenteil von Tailwind. BEM-Klassennamen beschreiben ein Element bis ins Detail ohne dabei zu beschreiben, wie es gestyled wurde. Da BEM und Tailwind Vor- und Nachteile bieten, kann man sie kombinieren. Je nach Geschmack sollte allerdings eine Primärmethode gewählt werden. In diesem Fall ist es Tailwind</p><a target='_blank' href='https://feathericons.com/'>Feather Icons</a> <a target='_blank' href='https://tailwindcss.com/'>tailwindcss</a> <a target='_blank' href='http://getbem.com/'>SCSS BEM</a>",
  },
  {
    id: "responsive",
    text: "funktioniert auf allen modernen Geräten, dank <i>mobile-first-responsive</i> Umsetzung",
  },
  {
    id: "gsap",
    text: "performante, reaktive Elementbewegungen mit <i>GSAP3</i>",
    detail:
      "<p>Moderne Betriebssysteme sowie Webseiten der größten Techkonzerne setzen auf interaction-design, welches von Bewegungen untermalt wird. Mit GSAP ist es möglich mit kurzen Befehlsketten komplexe, hochperformante Bewegungsabläufe abzubilden, die auf die Scrollposition/den Viewport des Nutzers reagieren können. Mit Typescript Imports können diese erstklassigen motion-features von GSAP verwendet werden, ohne den Quellcode unnötig aufzublähen. </p><a target='_blank' href='https://greensock.com/gsap/'>GSAP3</a>",
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
