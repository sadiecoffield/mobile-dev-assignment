import { createContext, useContext, useState } from "react";
import { categories as initialCategories } from "../../data/categories";

// Create context
const CategoriesContext = createContext();

// Provide categories data to all screens
export function CategoriesProvider({ children }) {
  const [categoriesData, setCategoriesData] = useState(initialCategories);

  return (
    <CategoriesContext.Provider value={{ categoriesData, setCategoriesData }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  return useContext(CategoriesContext);
}
