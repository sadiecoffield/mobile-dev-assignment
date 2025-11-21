import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
//import { categories as initialCategories } from "../../data/categories";

// CHANGE THIS TO BE PROFILES CONTEXT, SO WHEN PROFILES TILES UPDATED, THEY ARE AUTOMATICALLY SAVED AND LOADED

/*
// Create context
const CategoriesContext = createContext();

// Provide categories data to all screens
export function CategoriesProvider({ children }) {
  const [categoriesData, setCategoriesData] = useState(null);

  // Load data from storage when app starts
  useEffect(() => {
    async function loadCategoriesData() {
      try {
        // Get data from storage
        const storedData = await AsyncStorage.getItem("categoriesData");

        // Update categories object
        if (storedData) {
          setCategoriesData(JSON.parse(storedData));
        } else {
          setCategoriesData(initialCategories);
        }
      } catch (e) {
        console.log("Error loading categories:", e);
        setCategoriesData(initialCategories);
      }
    }

    loadCategoriesData();
  }, []);

  // Save data to storage whenever categoriesData is modified
  useEffect(() => {
    async function saveCategoriesData() {
      // Don't save if data hasn't been loaded yet
      if (!categoriesData) return;

      try {
        // Save categories object to storage
        await AsyncStorage.setItem(
          "categoriesData",
          JSON.stringify(categoriesData)
        );
      } catch (e) {
        console.log("Error saving categories:", e);
      }
    }

    saveCategoriesData();
  }, [categoriesData]);

  return (
    <CategoriesContext.Provider value={{ categoriesData, setCategoriesData }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoriesContext);
}
*/

const ProfilesContext = createContext();

// Provide profiles data to all screens
export function ProfilesProvider({ children }) {
  const [profilesData, setProfilesData] = useState(null);
  const [currentProfile, setCurrentProfile] = useState({
    name: "Default",
    customTiles: [],
  });

  // Load data from storage when app starts
  useEffect(() => {
    async function loadProfilesData() {
      try {
        // Get data from storage
        const storedData = await AsyncStorage.getItem("profilesData");

        // Update profiles array and set current profile to default
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setProfilesData(parsedData);
          setCurrentProfile(parsedData[0]);
        } else {
          // Create default profile if it doesn't exist (i.e. there's no stored data)
          const defaultProfile = {
            name: "Default",
            customTiles: [],
          };

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
