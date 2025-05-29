import { useEffect } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import UserProvider from "./contexts/user.context";

SplashScreen.preventAutoHideAsync();

export const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#525252",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(247, 216, 255)",
    onPrimaryContainer: "rgb(50, 0, 71)",
    secondary: "rgb(0, 104, 116)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(151, 240, 255)",
    onSecondaryContainer: "rgb(0, 31, 36)",
    tertiary: "rgb(129, 82, 80)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 218, 216)",
    onTertiaryContainer: "rgb(51, 17, 17)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(30, 27, 30)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(30, 27, 30)",
    surfaceVariant: "rgb(235, 223, 234)",
    onSurfaceVariant: "rgb(76, 68, 77)",
    outline: "rgb(125, 116, 126)",
    outlineVariant: "rgb(206, 195, 205)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(51, 47, 51)",
    inverseOnSurface: "rgb(246, 239, 243)",
    inversePrimary: "rgb(234, 178, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(250, 240, 252)",
      level2: "rgb(246, 233, 251)",
      level3: "rgb(243, 227, 249)",
      level4: "rgb(242, 224, 248)",
      level5: "rgb(240, 220, 247)",
    },
    surfaceDisabled: "rgba(30, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(30, 27, 30, 0.38)",
    backdrop: "rgba(53, 46, 54, 0.4)",
  },
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </UserProvider>
    </PaperProvider>
  );
}
