import React, { useState } from "react"
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Pressable,
} from "react-native"
import Collapsible from "react-native-collapsible"
import { LinearGradient } from "expo-linear-gradient"
import { setStatusBarHidden } from "expo-status-bar"
import { Avatar, Card, Button } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

interface Props {
  item: Item
}

interface Item {
  id: number
  releaseYear: number
  title: string
}

interface State {
  activeSections: any
  collapsed: boolean
  multipleSelect: boolean
}

const Post = (props: Props) => {
  const [collapsed, setCollapsed] = useState(true)
  const [hidden, setHidden] = useState(false)

  const Heart = () => <Icon name="heart" size={15} color="red" />

  const toggleExpanded = () => {
    console.log("pressed")
    setCollapsed(!collapsed)
  }

  const handleAnimationEnd = () => {
    setHidden(true)
  }

  return (
    <View>
      <Card containerStyle={styles.card}>
        <Avatar
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
          }}
        ></Avatar>
        <Collapsible
          collapsed={collapsed}
          collapsedHeight={20}
          onAnimationEnd={handleAnimationEnd}
        >
          <View>
            <Text style={{ padding: 10 }}>{props.item.title}</Text>
          </View>
        </Collapsible>
        <Pressable
          onPressOut={toggleExpanded}
          style={hidden && { display: "none" }}
        >
          <LinearGradient
            colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
            style={styles.linearGradient}
          />
        </Pressable>
        <Card.Divider />
        <Button icon={<Heart />} onPress={toggleExpanded} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 0,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 10,
  },
})

export default Post
