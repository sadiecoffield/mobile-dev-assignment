import { createTile } from "../src/models/tile";

// Mock expo-crypto to return a fixed UUID
jest.mock("expo-crypto", () => ({
  randomUUID: () => "mocked-tile-uuid-1234",
}));

describe("createTile", () => {
  it("creates a tile with all provided properties and a UUID", () => {
    const tileData = {
      text: "Water Bottle",
      zone: "",
      iconLibrary: "Ionicons",
      iconName: "water",
      iconColor: "blue",
      custom: true,
      photo: "photo1.jpg",
      categoryName: "needs",
    };

    const tile = createTile(tileData);

    expect(tile.id).toBe("mocked-tile-uuid-1234");
    expect(tile.text).toBe(tileData.text);
    expect(tile.zone).toBe(tileData.zone);
    expect(tile.iconLibrary).toBe(tileData.iconLibrary);
    expect(tile.iconName).toBe(tileData.iconName);
    expect(tile.iconColor).toBe(tileData.iconColor);
    expect(tile.custom).toBe(true);
    expect(tile.photo).toBe(tileData.photo);
    expect(tile.categoryName).toBe(tileData.categoryName);
  });

  it("uses default values when properties are not provided", () => {
    const tile = createTile({});

    expect(tile.id).toBe("mocked-tile-uuid-1234");
    expect(tile.text).toBe("");
    expect(tile.zone).toBe("");
    expect(tile.iconLibrary).toBeNull();
    expect(tile.iconName).toBeNull();
    expect(tile.iconColor).toBeNull();
    expect(tile.custom).toBe(false);
    expect(tile.photo).toBe("");
    expect(tile.categoryName).toBe("");
  });
});
