<template>
  <header class="tw-z-[1] tw-absolute">
    <a href="./"
      ><img
        class="watermark tw-w-10 lg:tw-w-[200px]"
        src="favicon.png"
        alt="Wasserzeichen Startseite"
    /></a>
  </header>

  <main>
    <section
      class="gsap-intro-trigger tw-w-full tw-h-screen tw-bg-slate-600 tw-min-h-[400px] tw-relative"
    >
      <div class="gsap-intro-text-wrapper twc-center tw--mt-8">
        <h2
          id="intro-text"
          class="intro-text"
          v-for="headline in headlines"
          :key="headline.id"
          v-html="headline"
        ></h2>
      </div>
      <div id="sdm" class="sdm">
        <div class="sdm__mouse">
          <div class="sdm__wheel"></div>
        </div>
        <div>
          <span class="sdm__arrows sdm__arrows--1"></span>
          <span class="sdm__arrows sdm__arrows--2"></span>
          <span class="sdm__arrows sdm__arrows--3"></span>
        </div>
      </div>
    </section>
    <section
      class="tw-relative tw-w-full tw-min-h-screen tw-bg-emerald-500 tw-py-40"
    >
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
              organisiert, gebaut, überprüft und getestet von Node18, NPM8,
              ESLINT, Prettier, <s>Vitest, cypress</s>
              <button @click="() => null" class="tw-inline">
                <vue-feather type="info"></vue-feather>
              </button>
            </p>
          </li>
          <li>
            <vue-feather type="check-circle" class=""></vue-feather>
            <p>
              HMR für Codeänderungen, die sofort im Browser sichtbar
              werden<button @click="() => null" class="tw-inline">
                <vue-feather type="info"></vue-feather>
              </button>
            </p>
          </li>
          <li>
            <vue-feather type="check-circle" class=""></vue-feather>
            <p>
              funktioniert auf allen modernen Geräten, dank mobile-first
              responsive Umsetzung
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
              <a href="https://github.com/webermaximilian92/reference22"
                >GitHub</a
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
    </section>
  </main>
</template>

<script lang="ts">
// or all tools are exported from the "all" file (excluding members-only plugins):
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      headlines: [
        "Eine Kurzreferenz,",
        "basierend auf neuster",
        "2022 Webtechnologie,",
        "von Maximilian Weber.",
      ],
    };
  },
  created() {
    this.headlines = this.headlines.map((headline: string) =>
      headline
        .split("")
        .map((c: string) =>
          c === " "
            ? `<span class="tw-inline-block">&nbsp;</span>`
            : `<span class="gsap-intro-text-in tw-inline-block"><span class="gsap-intro-text-out tw-inline-block">${c}</span></span>`
        )
        .join("")
    );
  },
  mounted() {
    // don't forget to register plugins
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".gsap-intro-text-in", {
      y: 200,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "Power4.easeOut",
      stagger: {
        each: 0.02,
        ease: "Power1.easeIn",
      },
    });

    gsap.to(".gsap-intro-text-out", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: -1000,
      opacity: 0,
      ease: "Power1.easeIn",
      stagger: {
        each: 0.005,
        ease: "Power1.easeIn",
      },
    });

    gsap.to(".sdm", {
      scrollTrigger: {
        trigger: ".gsap-intro-trigger",
        start: "top top",
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
      y: -100,
    });
  },
};
</script>
