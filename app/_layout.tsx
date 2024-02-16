import { FontAwesome } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View, useColorScheme } from "react-native";

import { UniversalStyles } from "@/app/universalStyles";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //Need to keep
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const containerColors =
    colorScheme === "light"
      ? UniversalStyles.containerLight
      : UniversalStyles.containerDark;

  return (
    <ThemeProvider value={colorScheme === "light" ? DefaultTheme : DarkTheme}>
      <View style={[containerColors, UniversalStyles.header]}>
        <View style={UniversalStyles.leftHeader}>
          <Text>Ryan Kutella</Text>
        </View>

        <View style={UniversalStyles.middleHeader}>
          <Link href="/" asChild style={{ flex: 1 }}>
            <Pressable style={{ flex: 1 }}>
              <Text style={{ textAlign: "center" }}>Home</Text>
            </Pressable>
          </Link>

          <Link href="/Projects/" asChild style={{ flex: 1 }}>
            <Pressable style={{ flex: 1 }}>
              <Text style={{ textAlign: "center" }}>Projects</Text>
            </Pressable>
          </Link>

          <Link href="/AboutMe/" asChild style={{ flex: 1 }}>
            <Pressable style={{ flex: 1 }}>
              <Text style={{ textAlign: "center" }}>About Me</Text>
            </Pressable>
          </Link>
        </View>

        <View style={UniversalStyles.rightHeader}>
          <Text>Links</Text>
        </View>
      </View>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </ThemeProvider>
  );
}
