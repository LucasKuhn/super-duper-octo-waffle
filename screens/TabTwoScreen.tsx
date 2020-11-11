// https://jsonplaceholder.typicode.com/todos/1
import * as React from "react"
import { FlatList, SafeAreaView, StyleSheet } from "react-native"

import Collapsible from "react-native-collapsible"

import { Card, ListItem, Button, Avatar } from "react-native-elements"

import EditScreenInfo from "../components/EditScreenInfo"
import Post from "../components/Post"
import { Text, View } from "../components/Themed"

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Third Item2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Third Item3",
  },
]

export default function TabTwoScreen() {
  const renderItem = ({ item }: { item: any }) => <Post text={item.title} />

  return (
    <FlatList
      style={styles.flatList}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#ffeae4",
  },
})
