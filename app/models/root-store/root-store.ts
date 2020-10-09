import { ResepStoreModel } from "../resep-store/resep-store"
import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { IThemeModelOut, ThemeModel } from "../common/theme-model"
import { removeUser } from "../../utils/storage/storage.user"
import { NavigationProp, StackActions } from "@react-navigation/native"
import { RootModalStoreModel } from "../root-modal-store"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  rootresepStore: types.optional(ResepStoreModel, {}),
  currentTheme: types.maybe(types.reference(ThemeModel)),
  modalStore: types.optional(RootModalStoreModel, {}),
}).actions(self =>({
        setSelectedTheme(theme: IThemeModelOut) {
          self.currentTheme = theme
        },
        afterCreate(){
          self.rootresepStore = ResepStoreModel.create({})
          self.modalStore = RootModalStoreModel.create({})
        },
        /**
         * Fungsi untuk melakukan logout user, handle navigasi dan clear data user
         */
        logout: flow(function* (navigation: NavigationProp<any>) {
          yield removeUser()
          const resetAction = StackActions.replace('splash')
          navigation.dispatch(resetAction)
      }),
}))

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
