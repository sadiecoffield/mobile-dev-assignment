import * as Crypto from "expo-crypto";

// Returns tile objects
export function createTile({ text, zone = "", icon, photoUri = null }) {
  const id = Crypto.randomUUID();

  return { id, text, zone, icon };
}
