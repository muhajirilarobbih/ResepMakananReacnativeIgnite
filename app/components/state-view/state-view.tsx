// import * as React from "react"
// import { View } from "react-native"

// interface IStateEquitable {
//     key: number
// }

// const instanceOfIStateEquitable = (object: any): object is IStateEquitable => {
//     return 'key' in object
// }

// export interface StateViewProp<T extends number | string | IStateEquitable> {
//     state: T;
//     viewStates: Map<T, React.ReactElement>
// }

// export const StateView: <T extends string | number | IStateEquitable>(p: StateViewProp<T>) => React.ReactElement<StateViewProp<T>> = (props) => {
//     const state = instanceOfIStateEquitable(props)
//         ? props.state//(props.state as any).key
//         : props.state
//     const view = props.viewStates.get(state) ?? <View></View>
//     return view
// }

import { AppError } from '../../services/api/api.types'
import { logger } from '../../app-config'

export enum StateSelector {
    None,
    Loading,
    Error,
    Success,
    Empty,
}

export interface DataState {
    state: StateSelector,
    message?: string
}

export const StateNone = (): DataState => {
    return {
        state: StateSelector.None,
    }
}

export const StateLoading = (): DataState => {
    return {
        state: StateSelector.Loading,
    }
}

export const StateError = (value: any): DataState => {
    let message = 'Terjadi kesalahan'
    logger.info({
        msg: 'Origin error: ',
        data: value,
    })
    if (value instanceof AppError) {
        message = value.message
    } else if (value instanceof Object) {
        if (value.message !== undefined) {
            message = value.message
        }
    }
    return {
        state: StateSelector.Error,
        message: message,
    }
}

export const StateSuccess = (): DataState => {
    return {
        state: StateSelector.Success,
    }
}

export const StateEmpty = (): DataState => {
    return {
        state: StateSelector.Empty,
    }
}