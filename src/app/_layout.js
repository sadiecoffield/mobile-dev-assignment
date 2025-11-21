import { Stack } from "expo-router";
import { useEffect } from "react";
import { initVoice } from "../api/text-to-speech.js";
import { ProfilesProvider } from "../contexts/ProfilesProvider.js";

export default function RootLayout() {
  // Initialise the voice used for text to speech
  useEffect(() => {
    initVoice(23);
  }, []);

  return (
    <ProfilesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="[category]" options={{ headerShown: false }} />
        <Stack.Screen name="addTile" options={{ headerShown: false }} />
        <Stack.Screen name="removeTile" options={{ headerShown: false }} />
        <Stack.Screen name="camera" options={{ headerShown: false }} />
      </Stack>
    </ProfilesProvider>
  );
}
