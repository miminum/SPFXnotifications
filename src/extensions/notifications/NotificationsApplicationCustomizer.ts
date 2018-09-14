import { override } from '@microsoft/decorators';
import { Logger, ConsoleListener, LogLevel } from "sp-pnp-js";
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { InitLogger } from "../../common/LoggerBuilder";
import { Dialog } from '@microsoft/sp-dialog';
import Constants from "../../common/Constants";
import { Settings } from '@e2/settings';

import * as strings from 'NotificationsApplicationCustomizerStrings';

const LOG_SOURCE: string = 'NotificationsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface INotificationsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class NotificationsApplicationCustomizer
  extends BaseApplicationCustomizer<INotificationsApplicationCustomizerProperties> {
    constructor() {
        super();
        //load fabric ui styles & icons
        
    }
    
    @override
    public onInit(): Promise<void> {
        Settings.init(this.context.pageContext);
            InitLogger(this.context);

        let message: string = this.properties.testMessage;
        if (!message) {
        message = '(No properties were provided.)';
        }

        Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);

        return Promise.resolve();
    }
}
