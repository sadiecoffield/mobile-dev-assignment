import * as Crypto from "expo-crypto";

// Returns tile objects
export function createTile({ text, zone = "", icon, imageUri = null }) {
  const id = Crypto.randomUUID();

  return { id, text, zone, icon };
}
