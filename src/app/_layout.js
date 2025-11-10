import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { initVoice } from "../api/text-to-speech.js";

export default function RootLayout() {
  // Initialise the voice used for text to speech
  useEffect(() => {
    initVoice(23);
  }, []);

  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="[category]" options={{ headerShown: false }} />
        <Stack.Screen name="addTile" options={{ headerShown: false }} />
        <Stack.Screen name="removeTile" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
