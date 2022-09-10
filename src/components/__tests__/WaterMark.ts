import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import WaterMark from "../page-layout/WaterMark.vue";

describe("WaterMark", () => {
  it("renders properly", () => {
    const wrapper = mount(WaterMark, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
