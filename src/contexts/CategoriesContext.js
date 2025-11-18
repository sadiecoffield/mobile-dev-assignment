import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { categories as initialCategories } from "../../data/categories";

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
