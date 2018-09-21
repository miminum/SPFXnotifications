import * as React from "react";
import { OnCallbackEvent } from "../../../../node_modules/@types/orchestrator";
import styles from "./Task.module.scss";
import * as Moment from "moment";
import IconHelper from "../util/iconHelper";

export interface ITaskProperties {
    onDismiss?: OnCallbackEvent;
    title: string;
    description: string;
    startTime: Date;
    photoUrl?: string;
    iconClass?: string;
    linkUrl?: string;
}

export interface ITaskState {
    viewed?: boolean;
}

export default class Task extends React.Component<ITaskProperties, ITaskState> {
    constructor(props:ITaskProperties) {
        super(props);
    }

    private getFormattedDate(value:string) {
        let date = Moment(value);
        return date.isValid() ? date.format('HH:MM, DD MMM YYYY') : '';
    }


    public render(): React.ReactElement<ITaskProperties> {
        const iconHelper = new IconHelper;
        return (
            <div className={styles.taskContainer}>
                <div className={styles.media + ' ' + styles.containerColumn}>
                    {!!this.props.iconClass && (<i className={`ms-Icon ${iconHelper.convertTypetoIcon(this.props.iconClass)}`}></i>)}
                </div>
                <div className={styles.content + ' ' + styles.containerColumn}>
                    <div>{this.props.title}</div>
                    <div>{this.props.description}</div>
                </div>
                <div className={styles.dismiss + ' ' + styles.containerColumn}>
                </div>
            </div>
        );
    }
}