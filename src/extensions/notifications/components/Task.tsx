import * as React from "react";
import { OnCallbackEvent } from "../../../../node_modules/@types/orchestrator";
import styles from "./Task.module.scss";
import * as Moment from "moment";
import IconHelper from "../util/iconHelper";

export interface ITaskProperties {
    // Need to find correct type (OnCallBackOption) for onDismiss
    onDismiss: Function;
    title: string;
    description: Object;
    startTime: Date;
    endTime?: Date;
    photoUrl?: string;
    iconClass?: string;
    linkUrl?: string;
    id?: string;
}

export interface ITaskState {
    viewed?: boolean;
}

export default class Task extends React.Component<ITaskProperties, ITaskState> {
    constructor(props:ITaskProperties) {
        super(props);
    }

    private getFormattedDate(startTime:Date, endTime?:Date): string {
        let start = Moment(startTime);
        const formattedStart = start.isValid() ? start.format('DD/MM, h:mma') : '';
        if (endTime) {
            let end = Moment(endTime);
            //To do: account for end dates which are on different days
            if(!startTime) {
                return end.isValid ? end.format('[Due: ]DD/MM, h:mma') : '';
            }
            const formattedEnd = end.isValid ? end.format('h:mma') : '';
            return formattedStart + ' - '+ formattedEnd;
        }
        return formattedStart;
    }

    private descriptionBuilder(description:object): JSX.Element {
        switch(description['type']) {
            case 'text':
                return <div>{description['data']}</div>;
            case 'location':
            //ToDo: update to appropriate Icon
                return <div><i className="ms-Icon ms-Icon--MapPinSolid" aria-hidden="true"></i>{' ' + description['data']}</div>;
            default:
                return <div></div>;
        }
    }
    
    private taskDismissed = () => {
        const {onDismiss, id} = this.props;
        const idToPass = id || 'testId';
        onDismiss(idToPass);
    }

    public render(): React.ReactElement<ITaskProperties> {
        const iconHelper = new IconHelper;

        const date = this.getFormattedDate(this.props.startTime, this.props.endTime);
        const descriptionElement = this.descriptionBuilder(this.props.description);

        return (
            <div className={styles.taskContainer}>
                <div className={styles.media + ' ' + styles.containerColumn}>
                    {!!this.props.iconClass && (<i className={`ms-Icon ${iconHelper.convertTypetoIcon(this.props.iconClass)}`}></i>)}
                </div>
                <div className={styles.content + ' ' + styles.containerColumn}>
                    <div className={styles.titleAndDescription}>
                        <div className={styles.title}>{this.props.title}</div>
                        <div className={styles.description}>{descriptionElement}</div>
                    </div>
                    <div className={styles.time}><small>{date}</small></div> 
                </div>
                <div className={styles.dismiss + ' ' + styles.containerColumn}>
                    <i className='ms-Icon ms-Icon--CalculatorMultiply' onClick={() => this.taskDismissed()}>
                    </i>
                </div>
            </div>
        );
    }
}