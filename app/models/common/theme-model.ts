import { types, SnapshotIn, SnapshotOut } from "mobx-state-tree";

export const ThemeModel = types.model()
    .props({
        id: types.identifier,
        name: types.string
    })

export interface IThemeModelOut extends SnapshotOut<typeof ThemeModel> { }

export interface IThemeModelIn extends SnapshotIn<typeof ThemeModel> { }