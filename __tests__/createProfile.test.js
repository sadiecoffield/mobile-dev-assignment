import { createProfile } from "../src/models/profile";

// Mock expo-crypto to provide a fixed UUID
jest.mock("expo-crypto", () => ({
  randomUUID: () => "mocked-profile-uuid-1234",
}));

describe("createProfile", () => {
  it("creates a profile with an ID, name, and array of custom tiles", () => {
    const profileData = {
      name: "John",
      customTiles: [],
    };

    const profile = createProfile(profileData);

    expect(profile.id).toBe("mocked-profile-uuid-1234");
    expect(profile.name).toBe("John");
    expect(profile.customTiles).toEqual([]);
  });

  it("uses default values when no arguments are provided", () => {
    const profile = createProfile({});

    expect(profile.id).toBe("mocked-profile-uuid-1234");
    expect(profile.name).toBe("");
    expect(profile.customTiles).toEqual([]);
  });
});
