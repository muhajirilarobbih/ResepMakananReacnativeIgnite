/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app or storybook.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigation, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignore-warnings"
import React, { useState, useEffect, useRef } from "react"
import { NavigationContainerRef } from "@react-navigation/native"
import { SafeAreaProvider, initialWindowSafeAreaInsets } from "react-native-safe-area-context"
import * as storage from "./utils/storage"
import * as material from "@eva-design/material"
import {
  useBackButtonHandler,
  RootNavigator,
  canExit,
  setRootNavigation,
  useNavigationPersistence,
} from "./navigation"
import { RootStore, RootStoreProvider, setupRootStore } from "./models"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens"
import { Observer } from "mobx-react-lite"
import { RnKittenStyles } from "./theme/rn-kitten-styles"
import customMapping from "./custom-mapping"
import { StatusBar, View } from "react-native"
import { ApplicationProvider } from "@ui-kitten/components"
import { RootModalScreen } from "./screens/root-modal-screen/root-modal-screen"
enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

/**
 * This is the root component of our app.
 */
function App() {
  const navigationRef = useRef<NavigationContainerRef>()
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  setRootNavigation(navigationRef)
  useBackButtonHandler(navigationRef, canExit)
  const { initialNavigationState, onNavigationStateChange } = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  )

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    ;(async () => {
      setupRootStore().then(setRootStore)
    })()
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color. You can replace
  // with your own loading component if you wish.
  if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
        {/* <RootNavigator
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        /> */}
        <Observer
          render={() => {
            const dark = Object.assign(material.dark, RnKittenStyles)
            const light = Object.assign(material.light, RnKittenStyles)

            const providerAtts = {
              ...material,
              customMapping: customMapping,
            }

            return (
              // @ts-ignore
              <ApplicationProvider
                {...providerAtts}
                theme={dark}>
                <View style={{
                  flex: 1,
                }}>
                  <View style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1,
                  }}>
                    <View style={{
                      flex: 1
                    }}>
                      {/* <StatusBar barStyle={isDarkTheme() ? "light-content" : "dark-content"} /> */}
                      <StatusBar
                        barStyle='dark-content'
                        backgroundColor='transparent'
                        translucent={true} />
                      <RootNavigator
                        ref={navigationRef}
                        initialState={initialNavigationState}
                        onStateChange={onNavigationStateChange} />
                    </View>
                  </View>
                  <Observer>
                    {() => {
                      return <View style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        zIndex: rootStore.modalStore.modals.length ? 2 : 0,
                      }}>
                        <RootModalScreen />
                      </View>
                    }}
                  </Observer>
                </View>
              </ApplicationProvider>
            )
          }} />
      </SafeAreaProvider>
    </RootStoreProvider>
  )
}

export default App
