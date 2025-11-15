import * as Crypto from "expo-crypto";

// Returns tile objects
export function createTile({
  text = "",
  zone = "",
  iconLibrary = "",
  iconName = "",
  iconColor = "",
  photoUri = "",
}) {
  const id = Crypto.randomUUID();

  return { id, text, zone, iconLibrary, iconName, iconColor, photoUri };
}
