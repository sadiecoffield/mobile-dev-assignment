import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CameraScreen() {
  const router = useRouter();
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function handleTakePhoto() {
    try {
      // If camera instance is mounted
      if (cameraRef.current) {
        // Take picture and save to app's cache directory
        const photo = await cameraRef.current.takePictureAsync();

        // Pass the uri to the local image file back to "Add New Tile" screen
        router.replace({
          pathname: "/addTile",
          params: { photoUri: photo.uri },
        });
      }
    } catch (e) {
      console.error("Failed to take picture", e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/addTile")}
        >
          <Text style={styles.text}>
            <Ionicons name="close" size={40} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>
            <Ionicons name="camera-reverse-sharp" size={40} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <CameraView
        style={styles.camera}
        facing={facing}
        animateShutter={true}
        ref={cameraRef}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTakePhoto()}
        >
          <Text style={styles.text}>
            <MaterialCommunityIcons
              name="circle-slice-8"
              size={100}
              color="white"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  topBar: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bottomBar: {
    height: 120,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
