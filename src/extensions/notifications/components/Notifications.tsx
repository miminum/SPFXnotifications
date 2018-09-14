import * as React from "react";
import * as ReactDOM from "react-dom";

export interface INotificationsProperties {
    inlineStyles?: string;
    siteCollectionAbsoluteUrl: string;
    currentUserLogin: string;
}

export interface INotificationsState {
    settingsLoaded: boolean;
}

export default class Notifications extends React.Component<INotificationsProperties, INotificationsState> {
    constructor(props: INotificationsProperties) {
        super(props);
        this.state = {
            settingsLoaded: false
        };
    }
    
}