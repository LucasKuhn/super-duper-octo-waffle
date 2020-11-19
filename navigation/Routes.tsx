import React, { useState } from "react"

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { ActivityIndicator, View } from "react-native"

export default function Routes() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Text>oi</Text>
    </NavigationContainer>
  )
}
