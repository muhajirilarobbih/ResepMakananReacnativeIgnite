import * as React from "react"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { observable, action } from "mobx"
import { logger } from "../../app-config"

export class ModalDataStore {
  @observable
  isVisible: boolean

  @action
  setIsVisible(value: boolean) {
    this.isVisible = value;
  }
}

export interface ModalData {
  id: string
  component: React.ReactElement
  store: ModalDataStore
}

export const RootModalStoreModel = types
  .model({})
  .volatile(self => ({
    modals: observable.array<ModalData>([]),
  }))
  .extend(self => {
    return ({
      views: {
        get modalsJS() {
          return self.modals.toJS()
        }
      }
    })
  })
  .actions(self => {
    return ({
      addModal(modalData: ModalData) {
        self.modals.push(modalData)
      },
      removeLastModal() {
        if (self.modals.length <= 0) {
          logger.info("No modals")
          return
        }

        const lastModal = self.modals[self.modals.length - 1]
        lastModal.store.setIsVisible(false)
        self.modals.remove(lastModal)
      }
    })
  })

type RootModalStoreType = Instance<typeof RootModalStoreModel>
export interface RootModalStore extends RootModalStoreType { }
type RootModalStoreSnapshotType = SnapshotOut<typeof RootModalStoreModel>
export interface RootModalStoreSnapshot extends RootModalStoreSnapshotType { }
