import { ResepModel, Resep } from "./resep"

test("can be created", () => {
  const instance: Resep = ResepModel.create({})

  expect(instance).toBeTruthy()
})