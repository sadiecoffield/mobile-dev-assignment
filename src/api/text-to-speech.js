import * as Speech from "expo-speech";

let selectedVoice = null;

// Initialize voice once
export async function initVoice(voiceIndex = 0) {
  try {
    // Fetch all voices from api
    const voices = await Speech.getAvailableVoicesAsync();

    // If all voices are fetched, set selected voice to the voice at provided index
    if (voices && voices.length > 0) {
      selectedVoice = voices[voiceIndex]?.identifier;
    }
  } catch (e) {
    console.error("Error fetching voices:", e);
  }
}

// Use selected voice in speak function if it exists, otherwise use the system default
export function speak(text) {
  Speech.speak(text, selectedVoice ? { voice: selectedVoice } : {});
}
