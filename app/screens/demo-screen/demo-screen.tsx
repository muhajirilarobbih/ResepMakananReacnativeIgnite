import React, { useEffect, useState } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList, TouchableOpacity } from "react-native"
import { ParamListBase, useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Text, Screen, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { useStores } from "../../models"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript"
export const logoIgnite = require("./logo-ignite.png")
export const heart = require("./heart.png")

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

export interface DemoScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const DemoScreen: React.FunctionComponent<DemoScreenProps> = (props) => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const rootResep = useStores()
  const getResepRefresh= () => {
    rootResep.rootresepStore.getReseps()
  }
  React.useEffect(() => {
    getResepRefresh()
  }, [])
  return (
    <View style={FULL}>
      <Wallpaper />
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
          data={rootResep.rootresepStore.resepsstore}
          renderItem={({item}) => (
          <TouchableOpacity style={RESEP_ROW} onPress={() => {
            rootResep.rootresepStore.setDetail(item)
            navigation.navigate("detail")
          }}>
            <Image style={RESEP_IMAGE} source ={{uri : item.image}}/>
            <Text style={RESEP_NAME}>{item.name}</Text>
          </TouchableOpacity>
          )}
        />
        {/* <View>
          <Button
            style={DEMO}
            textStyle={DEMO_TEXT}
            tx="demoScreen.reactotron"
            onPress={demoReactotron}
          />
          <Text style={HINT} tx={`demoScreen.${Platform.OS}ReactotronHint`} />
        </View> */}
        
      </Screen>
    </View>
  )
}
