// https://jsonplaceholder.typicode.com/todos/1
import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native"

import Collapsible from "react-native-collapsible"

import { Card, ListItem, Avatar } from "react-native-elements"

import EditScreenInfo from "../components/EditScreenInfo"
import Post from "../components/Post"
import { Text, View } from "../components/Themed"

export default function TabTwoScreen() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const Spinner = () => <ActivityIndicator color="#ff6056" size="large" />

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return isLoading ? (
    <View style={[styles.container]}>
      <Spinner />
    </View>
  ) : (
    <FlatList
      style={styles.flatList}
      data={data}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <Post item={item}></Post>}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#ffeae4",
  },
  container: {
    backgroundColor: "#ffeae4",
    flex: 1,
    justifyContent: "center",
  },
})
