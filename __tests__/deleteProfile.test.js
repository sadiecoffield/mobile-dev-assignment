// Mock function that simulates handleDeleteProfile
function handleDeleteProfile(
  profileId,
  profilesData,
  setProfilesData,
  currentProfile,
  setCurrentProfile
) {
  const updatedProfiles = profilesData.filter(
    (profile) => profile.id !== profileId
  );
  setProfilesData(updatedProfiles);

  // Update currentProfile if deleted
  if (currentProfile.id === profileId) {
    setCurrentProfile(updatedProfiles[0] || null);
  }
}

describe("handleDeleteProfile", () => {
  it("removes the selected profile from profilesData and updates currentProfile", () => {
    const setProfilesData = jest.fn();
    const setCurrentProfile = jest.fn();

    const profilesData = [
      { id: "p1", name: "Alice" },
      { id: "p2", name: "Bob" },
    ];

    const currentProfile = { id: "p2", name: "Bob" };

    handleDeleteProfile(
      "p2",
      profilesData,
      setProfilesData,
      currentProfile,
      setCurrentProfile
    );

    // Check that setProfilesData was called with the updated list
    expect(setProfilesData).toHaveBeenCalledWith([{ id: "p1", name: "Alice" }]);

    // Check that currentProfile was updated to first profile
    expect(setCurrentProfile).toHaveBeenCalledWith({ id: "p1", name: "Alice" });
  });

  it("does not change currentProfile if a different profile is deleted", () => {
    const setProfilesData = jest.fn();
    const setCurrentProfile = jest.fn();

    const profilesData = [
      { id: "p1", name: "Alice" },
      { id: "p2", name: "Bob" },
    ];

    const currentProfile = { id: "p2", name: "Bob" };

    handleDeleteProfile(
      "p1",
      profilesData,
      setProfilesData,
      currentProfile,
      setCurrentProfile
    );

    expect(setProfilesData).toHaveBeenCalledWith([{ id: "p2", name: "Bob" }]);

    // Current profile should remain unchanged
    expect(setCurrentProfile).not.toHaveBeenCalled();
  });
});
