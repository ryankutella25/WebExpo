import Colors from "@/Components/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Pressable, useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  return (
    <ThemeProvider value={colorScheme === "light" ? DefaultTheme : DarkTheme}>
      <Stack screenOptions={{}}>
        {/* Main Landing Page */}
        <Stack.Screen
          name="index"
          options={{
            title: "Emergency Help",
            headerRight: () => (
                <Link href="/settings/" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <Ionicons
                        name="settings-sharp"
                        size={25}
                        color={Colors[colorScheme ?? "light"].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
          }}
        />
        {/* Automotive Landing Page */}
        <Stack.Screen
          name="automotive/index"
          options={{
            title: "Automotive",
          }}
        />
        {/* Health Landing Page */}
        <Stack.Screen
          name="health/index"
          options={{
            title: "Health",
          }}
        />
        {/* Home Landing Page */}
        <Stack.Screen
          name="home/index"
          options={{
            title: "Home",
          }}
        />
        {/* Setting Landing Page */}
        <Stack.Screen
          name="settings/index"
          options={{
            title: "Settings",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
