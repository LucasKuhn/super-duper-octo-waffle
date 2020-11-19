import { StatusBar } from "expo-status-bar"
import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import useCachedResources from "./hooks/useCachedResources"
import Navigation from "./navigation/Navigation"
import { AppLoading } from "expo"
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins"

export default function App() {
  const isLoadingComplete = useCachedResources()
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })

  if (!isLoadingComplete || !fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <Navigation />
      </SafeAreaProvider>
    )
  }
}
