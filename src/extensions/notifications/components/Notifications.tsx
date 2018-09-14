import * as React from "react";
import * as ReactDOM from "react-dom";

import { Settings } from '@e2/settings';
import Constants from "../../../common/Constants";
/* tslint:disable-next-line:no-use-before-declare */
import styles from "./Notifications.module.scss";

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

    private initComponent() {
        let stateToUpdate = {...this.state};
        Settings.Get([
            Constants.settings.apiURL
        ]).then(settings => {
            stateToUpdate.settingsLoaded = true;
            this.setState(stateToUpdate);
        });
    }

    public render(): React.ReactElement<INotificationsProperties> {
        console.log('Notifications.tsx: render()');
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <i className="ms-Icon ms-Icon--Plug"></i>
                    <span className={styles.count}>3</span>
                </div>
            </div>
        );
    }
}