<template>
  <header></header>

  <main>
    <section class="gsap-intro-trigger tw-w-full tw-h-screen tw-bg-stone-600">
      <div class="gsap-intro-text-wrapper twc-center">
        <h2
          id="intro-text"
          class="intro-text"
          v-for="headline in headlines"
          :key="headline.id"
          v-html="headline"
        ></h2>
      </div>
      <div id="sdm" class="sdm">
        <div class="sdm_mouse">
          <div
            class="sdm_wheel tw-h-2 tw-w-1 tw-block tw-my-2 tw-relative tw-bg-current tw-border-2 tw-border-current"
          ></div>
        </div>
        <div>
          <span class="m_scroll_arrows unu"></span>
          <span class="m_scroll_arrows doi"></span>
          <span class="m_scroll_arrows trei"></span>
        </div>
      </div>
    </section>
    <section class="tw-relative tw-w-full tw-h-screen tw-bg-stone-600">
      <p>Dieses Projekt basiert auf:</p>
      <ul>
        <li>
          einer hochperformanten single-page Vue3-App (TS, Pinia, SFC, Vite für
          HMR)
        </li>
        <li>
          bestehend aus kleinen, "unwissenden" Single-File-Components (VUE SFC)
        </li>
        <li>inklusive vereinfachtem page-routing</li>
        <li>
          organisiert, gebaut und überprüft von Node18, NPM8, ESLINT, Prettier
        </li>
        <li>optisch verfeinert und schnell wartbar mit tailwindcss</li>
        <li>performante, selbst konzipierte Elementbewegungen mit GSAP</li>
        <li>alle Codeänderungen sofort im Browser sichtbar</li>
        <li>
          ausführbar geschlossen und unabhängig über Docker oder konventionell
          über eine README Anleitung.
        </li>
        <li>Quellcode aufrufbar über GitHub.</li>
      </ul>

      <button
        class="twc-center tw-w-24 tw-h-24 tw-rounded-3xl tw-bg-stone-700 tw-text-teal-400 tw-shadow-md tw-transition-all tw-duration-700 tw-ease-in-out hover:tw-shadow-lg hover:tw-scale-105 hover:tw-text-teal-200"
      >
        <vue-feather type="feather" class=""></vue-feather>
      </button>
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
        "basierend auf einem",
        "2022 Tech-Stack,",
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
  },
};
</script>
