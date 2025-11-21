import * as Crypto from "expo-crypto";

export function createProfile({ name = "", customTiles = [] }) {
  const id = Crypto.randomUUID();

  return { id, name, customTiles };
}
