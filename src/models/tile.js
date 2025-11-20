import * as Crypto from "expo-crypto";

// Returns tile objects
export function createTile({
  text = "",
  zone = "",
  iconLibrary = null,
  iconName = null,
  iconColor = null,
  custom = false,
  photo = "",
}) {
  const id = Crypto.randomUUID();

  return { id, text, zone, iconLibrary, iconName, iconColor, custom, photo };
}
