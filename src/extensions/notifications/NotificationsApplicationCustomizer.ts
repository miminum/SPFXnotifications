import { override } from '@microsoft/decorators';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Logger, ConsoleListener, LogLevel } from "sp-pnp-js";
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import Constants from "../../common/Constants";
import { Settings } from '@e2/settings';
import Notifications, { INotificationsProperties } from './components/Notifications';

const LOG_SOURCE: string = 'NotificationsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface INotificationsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  inlineStyles: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class NotificationsApplicationCustomizer
  extends BaseApplicationCustomizer<INotificationsApplicationCustomizerProperties> {
    private _customizerPlaceholder: PlaceholderContent | undefined;
    private _key = Math.random().toString();
    constructor() {
        super();
        //load fabric ui styles & icons
    }

    @override
    public onInit(): Promise<void> {
        Settings.init(this.context.pageContext);

        if (!this._customizerPlaceholder) {
            this._customizerPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { 
                onDispose: this._onDispose.bind(this)
            });
            this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders.bind(this));
            this.context.application.navigatedEvent.add(this, this._renderPlaceHolders.bind(this, true));
        }

        return Promise.resolve();
    }

    private ensureCustomizerPlaceholder():HTMLDivElement {
        if (!this._customizerPlaceholder || !this._customizerPlaceholder.domElement) {
            return null;
        }
        this._customizerPlaceholder.domElement.setAttribute("data-id", this.context.instanceId);
        let customizerPlaceholderInDom = document.querySelector(`div[data-id="${this.context.instanceId}"]`);
        if (!customizerPlaceholderInDom) {
            let notificationsPlaceholder = document.querySelector('[data-sp-placeholder="Top"]');
            if (!notificationsPlaceholder) {
                Logger.write("Can't find 'Top' section placeholder for placing app customizer.", LogLevel.Error);
            }
            else {
                notificationsPlaceholder.appendChild(this._customizerPlaceholder.domElement);
            }
        }
        return this._customizerPlaceholder.domElement;
    }

    private _onDispose(): void {
        ReactDOM.unmountComponentAtNode(this._customizerPlaceholder.domElement);
    }

    private _renderPlaceHolders(forceUpdate?: boolean): void {
        let domElement = this.ensureCustomizerPlaceholder();
        if(domElement){
            if (forceUpdate === true) {
                this._key = Math.random().toString();
            }
            let header = React.createElement(Notifications, { 
                siteCollectionAbsoluteUrl: this.context.pageContext.site.absoluteUrl,
                currentUserLogin: this.context.pageContext.user.loginName,
                key: this._key,
                inlineStyles: this.properties.inlineStyles
            } as INotificationsProperties);
            ReactDOM.render(header, domElement);
        }
    }
}
