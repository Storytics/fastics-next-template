import { cleanup } from "@testing-library/react";
import { variantSwitch } from "../functions";

afterEach(cleanup);

describe("Functions Tests", () => {
  describe("variantSwitch Tests", () => {
    it("results correctly", () => {
      const size = "small";

      const result = variantSwitch(size, {
        small: "3rem",
        medium: "4rem",
        large: "5rem",
        default: "4rem",
      });

      expect(result).toEqual("3rem");
    });

    it("results with default", () => {
      const size = "bigger";

      const result = variantSwitch(size, {
        small: "3rem",
        medium: "4rem",
        large: "5rem",
        default: "4rem",
      });

      expect(result).toEqual("4rem");
    });
  });
});
