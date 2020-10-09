import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { ResepModel, ResepSnapshot, Resep } from "../resep/resep"
import { withEnvironment } from "../extensions/with-environment"
import { GetResepsResult } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const ResepStoreModel = types
  .model("ResepStore")
  .props({
    resepsstore: types.array(ResepModel),
    detailResep: types.maybe(types.reference(ResepModel)),
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    saveResep: (resepSnapshots : ResepSnapshot[]) => {
      const resepModels: Resep[] = resepSnapshots.map(c => ResepModel.create(c))
      self.resepsstore.push(...resepModels) 
    } ,
    setDetail(resep){
      self.detailResep = resep
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    getReseps: flow(function*(){
      const result: GetResepsResult = yield self.environment.api.getReseps()
      if(result.kind == 'ok'){
        console.log(result);
        self.resepsstore.push(...result.reseps)
      } else {
        self.resepsstore.clear()
        __DEV__ && console.tron.log(result.kind)
      }
    })
  }))

  /**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ResepStoreType = Instance<typeof ResepStoreModel>
export interface ResepStore extends ResepStoreType {}
type ResepStoreSnapshotType = SnapshotOut<typeof ResepStoreModel>
export interface ResepStoreSnapshot extends ResepStoreSnapshotType {}
