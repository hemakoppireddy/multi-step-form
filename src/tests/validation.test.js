import { checkEmailAvailability } from "../services/api";

global.fetch = vi.fn();

describe("Email validation", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should allow new email", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [],
    });

    await expect(checkEmailAvailability("new@mail.com")).resolves.toBe(true);
  });

  test("should reject existing email", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, email: "test@mail.com" }],
    });

    await expect(
      checkEmailAvailability("test@mail.com")
    ).rejects.toThrow("Email already exists");
  });
});
