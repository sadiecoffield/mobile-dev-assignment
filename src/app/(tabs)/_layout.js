import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NativeTabs, Label, Icon } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
    <NativeTabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#9b5de5",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <NativeTabs.Trigger name="index" >
        <Label>Home</Label>
        <Icon sf="house.fill" color="#9b5de5" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" color="#9b5de5" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
