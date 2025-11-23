// Mock function for handleRemoveTile
function handleRemoveTile(
  selectedTiles,
  currentProfile,
  setProfilesData,
  setCurrentProfile
) {
  if (selectedTiles.length === 0) return;

  const updatedProfiles = [
    {
      ...currentProfile,
      customTiles: currentProfile.customTiles.filter(
        (tile) => !selectedTiles.includes(tile.id)
      ),
    },
  ];

  setProfilesData(updatedProfiles);
  setCurrentProfile(updatedProfiles[0]);
}

describe("handleRemoveTile", () => {
  it("removes selected tiles from current profile", () => {
    const setProfilesData = jest.fn();
    const setCurrentProfile = jest.fn();

    const currentProfile = {
      id: "p1",
      name: "Alice",
      customTiles: [
        { id: "t1", text: "Tile 1" },
        { id: "t2", text: "Tile 2" },
        { id: "t3", text: "Tile 3" },
      ],
    };

    const selectedTiles = ["t1", "t3"];

    handleRemoveTile(
      selectedTiles,
      currentProfile,
      setProfilesData,
      setCurrentProfile
    );

    // Expect only the unselected tile remains
    expect(setProfilesData).toHaveBeenCalledWith([
      {
        id: "p1",
        name: "Alice",
        customTiles: [{ id: "t2", text: "Tile 2" }],
      },
    ]);

    // Current profile should also be updated
    expect(setCurrentProfile).toHaveBeenCalledWith({
      id: "p1",
      name: "Alice",
      customTiles: [{ id: "t2", text: "Tile 2" }],
    });
  });

  it("does nothing if no tiles are selected", () => {
    const setProfilesData = jest.fn();
    const setCurrentProfile = jest.fn();

    const currentProfile = {
      id: "p1",
      name: "Alice",
      customTiles: [{ id: "t1", text: "Tile 1" }],
    };

    handleRemoveTile([], currentProfile, setProfilesData, setCurrentProfile);

    expect(setProfilesData).not.toHaveBeenCalled();
    expect(setCurrentProfile).not.toHaveBeenCalled();
  });
});
