import React from "react"
import { Image, SafeAreaView, StyleSheet, View, ViewStyle } from "react-native"
import { Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript"
import { ParamListBase } from "@react-navigation/native"
import { ISplashStore, SplashStore } from "./splash-store"
import { useTheme } from "@ui-kitten/components/theme"
import { fontSizes } from "../../theme/font-sizes"
import { translate } from "../../i18n"
import { getVersion } from "react-native-device-info"
import { Button, Layout, Spinner } from "@ui-kitten/components"
import * as G from "react-native-easy-grid"
import { Observer } from "mobx-react-lite"
import { StateSelector } from "../../components/state-view/state-view"
import RadialGradient from 'react-native-radial-gradient'
import { MyText } from "../../components/my-text/my-text"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export interface SplashScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export interface SplashScreenState {
  store: ISplashStore
}

export class SpalshScreen extends React.Component <SplashScreenProps,SplashScreenState>{
  constructor(props: Readonly<SplashScreenProps>) {
    super(props)

    const store: ISplashStore = SplashStore.create()
    this.state = {
      store
    }
  }

  componentDidMount() {
    this.state.store.initialize(this.props.navigation)
  }

  render() {

    const Footer = () => {
      const theme = useTheme()

      return <View style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 15,
      }}>
        <View>
          <MyText>
            <MyText
              style={{
                fontSize: fontSizes.h5,
                fontFamily: 'OpenSans-Bold',
                color: theme['color-basic-100'],
                lineHeight: fontSizes.h5 + 5,
              }}>{translate('common.app_name_part1')}</MyText>
            <MyText
              style={{
                fontSize: fontSizes.h5,
                color: theme['color-basic-100'],
              }}> {translate('common.app_name_part2')}</MyText>
          </MyText>
          <MyText style={{
            textAlign: 'center',
            fontFamily: 'OpenSans-Bold',
            color: theme['color-basic-100'],
          }}>ver. {getVersion()}</MyText>
          <View style={{
            height: 15
          }} />
          <MyText style={{
            textAlign: 'center',
            color: theme['color-basic-100'],
          }}>{translate("common.binus_copyright")}</MyText>
        </View>
      </View>
    }

    return <>
      <Layout style={styles.container}>
        <G.Col style={{
          flex: 1,
          alignSelf: "center",

        }}>
          <RadialGradient style={{
            flex: 1,
            justifyContent: 'center'
          }}
            colors={[
              '#fff',
              '#fff',
            ]}
            radius={350}>
            <SafeAreaView style={{
              flex: 1,
              justifyContent: 'center'
            }}>
              <View style={{
                flex: 1,
                // backgroundColor: 'red',
                alignItems: 'flex-end',
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}>
              </View>
              <Footer />
              <View style={{
                width: '100%',
                flexDirection: "column",
                justifyContent: "center",
                position: 'absolute',
              }}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 150,
                    alignSelf: 'center'
                  }}
                  source={require('../../assets/Component.png')} />

                <Observer>
                  {() => {
                    if (this.state.store.state.state == StateSelector.Error) {
                      return <View style={{
                        padding: 15,
                      }}>
                        <MyText style={{
                          textAlign: 'center',
                          color: 'white',
                        }}>{this.state.store.state.message}</MyText>
                        <View style={{
                          height: 10,
                        }} />
                        <Observer>
                          {(() => {
                            if (this.state.store.showUpdateButton) {
                              return <Button
                                onPress={() => this.state.store.openStore()}
                                testID='splash_update'>
                                {props => <MyText {...props}>{translate("common.update")}</MyText>}
                              </Button>
                            }

                            return <Button
                              onPress={() => this.state.store.initialize(this.props.navigation)}
                              testID='splash_refresh'>
                              {props => <MyText {...props}>{translate("common.refresh")}</MyText>}
                            </Button>
                          })}
                        </Observer>
                      </View>
                    }
                    return <View style={{
                      alignSelf: 'center',
                      padding: 15,
                    }}>
                      <Spinner />
                    </View>
                  }}
                </Observer>
              </View>
            </SafeAreaView>
          </RadialGradient>
        </G.Col>
      </Layout>
    </>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    margin: 2,
  },
})
