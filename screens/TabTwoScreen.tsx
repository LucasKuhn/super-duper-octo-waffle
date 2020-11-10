// https://jsonplaceholder.typicode.com/todos/1
import * as React from "react"
import { FlatList, SafeAreaView, StyleSheet } from "react-native"

import { Card, ListItem, Button, Avatar } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

import EditScreenInfo from "../components/EditScreenInfo"
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

const Heart = () => <Icon name="heart" size={15} color="red" />

const Item = ({ title }: { title: string }) => (
  <Card containerStyle={styles.card}>
    <Avatar
      rounded
      source={{
        uri:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      }}
    ></Avatar>
    <Text style={{ marginBottom: 10 }}>{title}</Text>
    <Card.Divider />
    <Text>Oi</Text>
    <Card.Divider />
    <Button icon={<Heart />} />
  </Card>
)

export default function TabTwoScreen() {
  const renderItem = ({ item }: { item: any }) => <Item title={item.title} />

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
  card: {
    borderRadius: 20,
    borderWidth: 0,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})
