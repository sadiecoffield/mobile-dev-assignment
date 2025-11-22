import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { createProfile } from "../models/profile.js";

const ProfilesContext = createContext();

// Provide profiles data to all screens
export function ProfilesProvider({ children }) {
  const [profilesData, setProfilesData] = useState(null);
  const [currentProfile, setCurrentProfile] = useState(
    createProfile({
      name: "Default",
      customTiles: [],
    })
  );

  // Load data from storage when app starts
  useEffect(() => {
    async function loadProfilesData() {
      try {
        // Get data from storage
        const storedData = await AsyncStorage.getItem("profilesData");

        // Update profiles array and set current profile to default
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          console.log("Loaded profiles:", parsedData);
          setProfilesData(parsedData);
          setCurrentProfile(parsedData[0]);
        } else {
          // Create default profile if it doesn't exist (i.e. there's no stored data)
          const defaultProfile = createProfile({
            name: "Default",
            customTiles: [],
          });

          setProfilesData([defaultProfile]);
          setCurrentProfile(defaultProfile);
        }
      } catch (e) {
        console.log("Error loading categories:", e);
        setProfilesData([]);
      }
    }

    loadProfilesData();
  }, []);

  // Save data to storage whenever profilesData is modified
  useEffect(() => {
    async function saveProfilesData() {
      // Don't save if data hasn't been loaded yet
      if (!profilesData) return;

      try {
        // Save profiles array to storage
        await AsyncStorage.setItem(
          "profilesData",
          JSON.stringify(profilesData)
        );
      } catch (e) {
        console.log("Error saving profiles:", e);
      }
    }

    saveProfilesData();
  }, [profilesData]);

  return (
    <ProfilesContext.Provider
      value={{
        profilesData,
        setProfilesData,
        currentProfile,
        setCurrentProfile,
      }}
    >
      {children}
    </ProfilesContext.Provider>
  );
}

export function useProfiles() {
  return useContext(ProfilesContext);
}
