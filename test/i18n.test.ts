import { describe, it, expect } from "vitest";
import { ui } from "../src/i18n/ui";

describe("i18n dictionaries", () => {
  it("should have exactly the same keys for 'es' and 'en'", () => {
    const esKeys = Object.keys(ui.es).sort();
    const enKeys = Object.keys(ui.en).sort();

    // Comparamos que ambos arreglos de claves sean idénticos
    expect(enKeys).toEqual(esKeys);
  });
  
  it("should not have empty translations", () => {
    for (const [lang, dictionary] of Object.entries(ui)) {
      for (const [key, value] of Object.entries(dictionary)) {
        expect(value.trim()).not.toBe("");
      }
    }
  });
});
