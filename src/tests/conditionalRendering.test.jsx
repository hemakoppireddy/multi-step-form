import { shouldShowEmploymentFields } from "../utils/employmentUtils";

describe("Employment conditional logic", () => {
  test("returns true when employed is Yes", () => {
    expect(shouldShowEmploymentFields("Yes")).toBe(true);
  });

  test("returns false when employed is No", () => {
    expect(shouldShowEmploymentFields("No")).toBe(false);
  });
});
