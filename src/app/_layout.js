import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";

export default function RootLayout() {
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
