import { BaseComponentContext } from "@microsoft/sp-component-base";
import { E2LogListener } from "@e2/log-listener";
import { Settings } from '@e2/settings';
import { Logger, ConsoleListener, LogLevel } from "sp-pnp-js";
import Constants from './Constants';


function parseBool(value: string): boolean {
    let result = false;
    if (value && value.toLowerCase() == 'true' || value == "1") {
        result = true;
    }
    return result;
}

function parseNumber(value: string, def?: number): number {
    let result = 0;
    if (def) {
        result = def;
    }
    if (value && !isNaN(+value)) {
        result = +value;
    }
    return result;
}

const loggerKeyStr = "E2_UTAS_Logger_Listener_Instance";
const loggerKey = ((window as any).Symbol && Symbol.for(loggerKeyStr)) || loggerKeyStr;
const defaultLogLevel = LogLevel.Info;

export function InitLogger(context?: BaseComponentContext): Promise<any> {
    Logger.activeLogLevel = defaultLogLevel;
    Logger.subscribe(new ConsoleListener());

    Settings.init((context && context.pageContext) || null);
    return Settings.Get([
        Constants.settings.loggerEnabled,
        Constants.settings.loggerLevel,
        Constants.settings.loggerLevelToList
    ],[
        "true",
        ""+defaultLogLevel,
        "3"
    ]).then(settings => {
        let loggerEnabled = parseBool(settings[Constants.settings.loggerEnabled].Value);
        let loggerLevel = parseNumber(settings[Constants.settings.loggerLevel].Value, defaultLogLevel);
        let loggerListLevel = parseNumber(settings[Constants.settings.loggerLevelToList].Value, 3);
        if(!loggerEnabled){
            Logger.clearSubscribers();
        }else {
            let e2loggerInstance = (window as any)[loggerKey] || new E2LogListener(context, loggerListLevel);
            (window as any)[loggerKey] = e2loggerInstance;
            Logger.subscribe(e2loggerInstance);
            Logger.activeLogLevel = loggerLevel;
        }
    })
}