import "vitest";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { WindowWithPocket } from "../types";

declare global {
  interface Window extends WindowWithPocket {}
}

global.fetch = vi.fn();

const mockResponse = {
  ok: true,
  statusText: "OK",
  json: async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("0000-1111-2222-3333");
      }, 100);
    });
  },
} as Response;

beforeEach(() => {
  globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);
  // @ts-ignore
  window.pocket = undefined;
  localStorage.clear();
});

describe("Pixel Object", () => {
  describe("pixel loads without doing any change", () => {
    test("pixel loads without doing any change", () => {
      expect(window?.pocket).toEqual(undefined);
    });
  });
});
