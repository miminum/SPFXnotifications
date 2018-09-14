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
    notificationCount: number;
}

export default class Notifications extends React.Component<INotificationsProperties, INotificationsState> {
    constructor(props: INotificationsProperties) {
        super(props);
        const randomInteger = Math.floor(Math.random() * 11);
        this.state = {
            settingsLoaded: false,
            notificationCount: randomInteger
        };
    }

    private toggleNotificationsBox(): void {
        console.log('toggleNotificationsBox() clicked');
    } 


    private initComponent() {
        // let stateToUpdate = {...this.state};
        // Settings.Get([
        //     Constants.settings.apiURL
        // ]).then(settings => {
        //     stateToUpdate.settingsLoaded = true;
        //     this.setState(stateToUpdate);
        // });
    }

    public render(): React.ReactElement<INotificationsProperties> {
        const { notificationCount } = this.state;
        console.log('Notifications.tsx: render()');
        return (
            <div className={styles.main}>
                <div 
                    className={styles.container}
                    onClick= { () => this.toggleNotificationsBox() }>
                        <i className="ms-Icon ms-Icon--Plug"></i>
                        <span className={styles.count}>{notificationCount}</span>
                </div>
            </div>
        );
    }
}