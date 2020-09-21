import { ResepStoreModel, ResepStore } from "./resep-store"

test("can be created", () => {
  const instance: ResepStore = ResepStoreModel.create({})

  expect(instance).toBeTruthy()
})