import { ParamListBase, StackActions } from "@react-navigation/native";
import { Instance, types } from "mobx-state-tree";
import { Linking, Platform } from "react-native";
import JailMonkey from 'jail-monkey'
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript";
import { DataState, StateError, StateLoading, StateNone } from "../../components/state-view/state-view";
import { ApiInstance, AppError } from "../../services/api";
import { translate } from "../../i18n";
import { getUser, isUserAuthenticated } from "../../utils/storage/storage.user";
import { logger, SaUser } from "../../app-config";
import { versionCompare } from "../../utils/utils";
import { getVersion } from "react-native-device-info";

export const SplashStore = types.model({})
    .props({
        state: types.optional(types.frozen<DataState>(), StateNone()),
        showUpdateButton: types.optional(types.boolean, false)
    })
    .actions((self) => ({
        runInAction(fn: () => void) {
            return fn()
        },
    }))
    .actions(self => {
        return ({
            openStore() {
                if (Platform.OS === 'android'){
                    const packageId = 'com.resepmobile'
                    try {
                        Linking.openURL(`market://details?id=${packageId}`)
                    } catch {
                        Linking.openURL(`http://play.google.com/store/apps/details?id=${packageId}`)
                    }
                }
            } ,

            /** inisialisasi aplikasi */

            initialize: async (navigation: NativeStackNavigationProp<ParamListBase>) => {
                try {
                    self.runInAction(() => {
                        self.state = StateLoading()
                    })

                    const isRooted: boolean = await JailMonkey.isJailBroken()
                    if (isRooted){
                        const appError = new AppError(translate('common.rootedMessage'))
                        throw appError
                    }

                    const isAuthenticated: boolean = await isUserAuthenticated()
                    logger.debug(`Is user authenticated: ${isAuthenticated}`)
                    // const login = isAuthenticated
                    //     ? await getUser()
                    //     : (await ApiInstance.login({
                    //         username: SaUser.username,
                    //         password: SaUser.password,
                    //     })).payload
                    // const serverAppVersionResponse = ((await ApiInstance.getAppVersion(login)).payload)

                    // const serverAppVersionString = Platform.OS === 'android'
                    //     ? serverAppVersionResponse.androidLastVersion
                    //     : serverAppVersionResponse.iosLastVersion
                    // logger.info({
                    //     msg: `Unparsed server app version: ${serverAppVersionString}`
                    // })

                    // const isNotUpToDate = versionCompare(getVersion().replace('v', ''), serverAppVersionString.replace('v', '')) === -1
                    // logger.info({
                    //     msg: `App is not up to date: ${isNotUpToDate}`
                    // })
                    // if (isNotUpToDate) {
                    //     self.runInAction(() => {
                    //         self.showUpdateButton = true
                    //     })
                    //     const appError = new AppError(translate('common.updateVersionMessage'))
                    //     throw appError
                    // }

                    const resetAction = StackActions.replace(isAuthenticated ? 'welcome' : 'welcome')
                    navigation.dispatch(resetAction)

                    self.runInAction(() => {
                        self.state = StateNone()
                    })
                } catch(error) {
                    self.runInAction(() => {
                        self.state = StateError(error)
                    })
                }
            }
        })
    })

    export interface ISplashStore extends Instance<typeof SplashStore> { }