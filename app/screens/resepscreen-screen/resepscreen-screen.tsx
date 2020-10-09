import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Header, Screen, Text, Wallpaper } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}
const RESEP_ROW: ViewStyle = {
  flexDirection: "row",
  paddingTop: 10
}
const RESEP_IMAGE: ImageStyle ={
  width: 50,
  height: 50
}
const RESEP_NAME: TextStyle = {
  paddingLeft : 15,
  fontSize : 20
}

export const ResepscreenScreen = observer(function ResepscreenScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const rootStore = useStores()

  useEffect(() => {
    rootStore.rootresepStore.getReseps()
  })

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Wallpaper/>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
      <Text style={TITLE} preset="header" >What is you wont</Text>
      <FlatList
        data={rootStore.rootresepStore.resepsstore}
        renderItem={({item}) => (
          <TouchableOpacity style={RESEP_ROW} onPress={() => {
            rootStore.rootresepStore.setDetail(item)
            navigation.navigate("detail")
          }}>
            <Image style={RESEP_IMAGE} source={{uri : item.image}}/>
            <Text style={RESEP_NAME}>{item.name}</Text>
          </TouchableOpacity>
        )}
      >
      </FlatList>
      </Screen>
    </View>
  )
})
