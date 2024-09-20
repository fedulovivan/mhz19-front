interface IArgs {
    [key: string]: any
}

interface ICondition {
    fn?: string
    or?: boolean
    args?: IArgs
    nested?: Array<ICondition>
}

interface IAction {
    fn: string
    args?: IArgs
}

export interface IRule {
    id: number
    name: string
    condition: ICondition
    actions: Array<IAction>
    throttle: string
}

export interface IDevice {
    id: number
    deviceId: string
    deviceClassId: string
    name: string
    comments?: string
    json?: any
}