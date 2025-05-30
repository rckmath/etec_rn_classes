import { useEffect } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "./_context/AuthContext";

SplashScreen.preventAutoHideAsync();

export const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#CC0000", // Pokedex Red
    onPrimary: "#FFFFFF",
    primaryContainer: "#FF6F6F", // Light Red
    onPrimaryContainer: "#7B1F1F", // Dark Red
    secondary: "#FFCB05", // Pokemon Yellow
    onSecondary: "#2A2A2A", // Dark Grey
    secondaryContainer: "#FFF176", // Light Yellow
    onSecondaryContainer: "#7B6F00", // Dark Yellow
    tertiary: "#3B4CCA", // Pokemon Blue
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#A7BFFF", // Light Blue
    onTertiaryContainer: "#1A237E", // Dark Blue
    error: "#D32F2F",
    onError: "#FFFFFF",
    errorContainer: "#FFCDD2",
    onErrorContainer: "#B71C1C",
    background: "#F5F5F5",
    onBackground: "#212121",
    surface: "#FFFFFF",
    onSurface: "#212121",
    surfaceVariant: "#E0E0E0",
    onSurfaceVariant: "#424242",
    outline: "#BDBDBD",
    outlineVariant: "#EEEEEE",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#212121",
    inverseOnSurface: "#F5F5F5",
    inversePrimary: "#FF6F6F",
    elevation: {
      level0: "transparent",
      level1: "#FFF3E0",
      level2: "#FFE0B2",
      level3: "#FFCC80",
      level4: "#FFB74D",
      level5: "#FFA726",
    },
    surfaceDisabled: "rgba(33, 33, 33, 0.12)",
    onSurfaceDisabled: "rgba(33, 33, 33, 0.38)",
    backdrop: "rgba(52, 52, 52, 0.4)",
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
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="screens/home" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </AuthProvider>
  );
}
