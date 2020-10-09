import { RootModalStoreModel, RootModalStore } from "./root-modal-store"

test("can be created", () => {
  const instance: RootModalStore = RootModalStoreModel.create({})

  expect(instance).toBeTruthy()
})