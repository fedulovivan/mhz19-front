interface IArgs {
    [key: string]: any
}

// { "app": { "memory": "950kb", "uptime": "4m21.416383334s" }, "counters": { "apiRequests": 2, "errors": 0 }, "tables": { "rules": 1, "devices": 3, "messages": 0, "actions": 1, "conditions": 1, "arguments": 1, "mappings": 0 }, "timings": { "messagesHandled": { "total": 13, "min": "343.583µs", "max": "15.771459ms", "avg": "2.271363ms" }, "queries": { "total": 31, "min": "142.291µs", "max": "12.110625ms", "avg": "4.036083ms" }, "transactions": { "total": 15, "min": "261.167µs", "max": "13.099334ms", "avg": "3.431488ms" } } }

export interface IStats {

    app: {
        memory: string
        uptime: string
    }

    counters: {
        [key: string]: number
    }

    tables: {
        [key: string]: number
    }

    timings: {
        [key: string]: {
            total: number
            min: string
            max: string
            avg: string
        }
    }

}

export interface ICondition {
    fn?: string
    or?: boolean
    args?: IArgs
    nested?: Array<ICondition>
}

export interface IAction {
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
    deviceClass: string
    name: string
    buriedTimeout: string
    comments?: string
    origin?: string
    json?: any
}

export interface IMessage {
    channelType: string
    deviceClass: string
    deviceId: string
    fromEndDevice: boolean
    timestamp: string
    payload: any
}

export interface IDictItem {
    id: number
    name: string
}

export interface IDicts {
    actions: Array<IDictItem>
    conditions: Array<IDictItem>
    channels: Array<IDictItem>
    deviceClasses: Array<IDictItem>
}

