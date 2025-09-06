import { StatusBar } from "react-native";
import "./global.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(movie-details)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
