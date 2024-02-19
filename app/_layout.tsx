import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { Text, useColorScheme, View } from "react-native";

import { UniversalStyles } from "@/app/universalStyles";
import TabPressable from "@/Components/TabPressable";
import { useState } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const containerColors = colorScheme === "light" ? UniversalStyles.containerLight : UniversalStyles.containerDark;

  const [activeIndex, setActiveIndex] = useState(0);

  const navigation = useRouter();

  return (
    <ThemeProvider value={colorScheme === "light" ? DefaultTheme : DarkTheme}>
      <View style={[containerColors, UniversalStyles.header]}>
        <View style={UniversalStyles.leftHeader}>
          <Text>Ryan Kutella</Text>
        </View>

        <View style={UniversalStyles.middleHeader}>
          <TabPressable active={activeIndex===0} title={"Home"} onShow={() => {navigation.replace("/");setActiveIndex(0)}}/>
          <TabPressable active={activeIndex===1} title={"Projects"} onShow={() => {navigation.replace("/Projects");setActiveIndex(1)}}/>
          <TabPressable active={activeIndex===2} title={"About Me"} onShow={() => {navigation.replace("/AboutMe");setActiveIndex(2)}}/>
        </View>

        <View style={UniversalStyles.rightHeader}>
          <Text>Links</Text>
        </View>
      </View>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Screens will be here, default is index.js */}
      </Stack>
    </ThemeProvider>
  );
}
