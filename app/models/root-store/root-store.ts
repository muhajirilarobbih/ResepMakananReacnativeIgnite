import { ResepStoreModel } from "../resep-store/resep-store"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  resepStore: types.optional(ResepStoreModel, {})
}).actions(self =>({
}))

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
