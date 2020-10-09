import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, Image } from "react-native"
import { Screen, Text, Header, Wallpaper } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

const FULL: ViewStyle = {
  flex: 1,
}
const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}

const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

export const DetailScreen = observer(function DetailScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const { rootresepStore } = useStores()
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen style={ROOT} preset="scroll" backgroundColor={color.transparent}>
      <Header
        headerTx="detailScreen.title"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <Image source={{uri : rootresepStore.detailResep.image}} style={{height: 300 , resizeMode: "stretch" , margin: 5}}/>
      <Text style={{fontSize: 30, fontWeight: "bold"}} preset="header">{rootresepStore.detailResep.name}</Text>
      <Text>{rootresepStore.detailResep.desc}</Text>
    </Screen>
    </View>
    
  )
})
