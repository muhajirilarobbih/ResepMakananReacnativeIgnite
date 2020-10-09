import * as React from "react"
import { observer, Observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { color } from "../../theme"
import { v1 } from "uuid"
import { useStores } from "../../models"

export interface RootModalScreenProps {
}


const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const RootModalScreen: React.FunctionComponent<RootModalScreenProps> = observer((props) => {
  const { modalStore } = useStores()

  return (
    <>
      <View style={{
        flex: 1
      }}>
        <Observer>
          {() => {
            return <View>
              {modalStore.modals.map(self => {
                return <View style={{
                  flex: 1,
                }} key={v1()}>
                  {self.component}
                </View>
              })}
            </View>
          }}
        </Observer>
      </View>
    </>
  )
})
