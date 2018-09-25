import * as React from "react";
import * as ReactDOM from "react-dom";

import { Settings } from '@e2/settings';
import Constants from "../../../common/Constants";
/* tslint:disable-next-line:no-use-before-declare */
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import styles from "./Notifications.module.scss";
import Task from "./Task";
import GraphService from "../service/graphService";
import TimsService from "../service/timsService";
import DataHelper from "../util/dataHelper";
import IconHelper from "../util/iconHelper";
import TaskItem from "../model/TaskItem";

import * as Moment from "moment";
import { BaseComponentContext } from '@microsoft/sp-component-base';

export interface INotificationsProperties {
    inlineStyles?: string;
    siteCollectionAbsoluteUrl: string;
    currentUserLogin: string;
    context: BaseComponentContext;
}

export interface INotificationsState {
    settingsLoaded: boolean;
    notificationCount: number;
    showContainer: boolean;
    data: Object[];
    eventsData: Object[];
    tasksData: Object[];
    animateButton: boolean;
}

export default class Notifications extends React.Component<INotificationsProperties, INotificationsState> {
    constructor(props: INotificationsProperties) {
        super(props);
        this.state = {
            settingsLoaded: false,
            notificationCount: 0,
            showContainer: false,
            data: [],
            eventsData: [],
            tasksData:[],
            animateButton: false
        };
    }

    private togglePanel(): void {
        this.setState({
            ...this.state,
            showContainer: !this.state.showContainer
        });
    }
    
    private hidePanel = (): void => {
        this.setState({ showContainer: false });
    }

    public componentDidMount() {
        // window.addEventListener('click', this.hideNotifications.bind(this));
        this.load();
    }

    private load() {
        const graphService = new GraphService(this.props.context);
        const timsService = new TimsService;
        const dataHelper = new DataHelper; 
        
        // const GraphDataCall = graphService.mockDataPromise();
        const TimsDataCall = timsService.mockDataPromise();
        const EventsDataCall =  graphService.getEventsData();
        const TasksDataCall = graphService.getOutlookTasks(true);
        Promise.all([TimsDataCall, EventsDataCall, TasksDataCall]).then(([TimData, EventsData, TasksData]) => {
            const count = EventsData.length + TasksData.length + TimData.length;
            this.setState({
                ...this.state,
                data: TimData,
                eventsData: EventsData,
                tasksData: TasksData,
                notificationCount: count
            });
    
        });
    }



    private taskDismissed = (idToPass:string) => {
        console.log('Notifications.tsx tasDismissed()', idToPass);
    }

    public render(): React.ReactElement<INotificationsProperties> {
        const { notificationCount, showContainer, data, eventsData, tasksData } = this.state;
        const animateClass = this.state.animateButton ? (' ' + styles["pulsate-fwd"]) : '';
        return (
            <div className={styles.main}>
                <div 
                    className={styles.iconContainer + animateClass}
                    onClick= { () => this.togglePanel() }
                    style={{backgroundColor: showContainer && '#e12422'}}
                    >
                        <i className="ms-Icon ms-Icon--Plug"></i>
                        <span className={styles.count}>{notificationCount}</span>
                </div>

                <Panel 
                    isOpen={ showContainer }
                    // className= { styles.panelStyling }
                    onDismiss={ () => this.hidePanel() }
                    onLightDismissClick={ () => this.hidePanel() }
                    isLightDismiss={true}
                    isBlocking={false}
                    // onRenderFooterContent={ this.renderFooter.bind(this) }
                    isFooterAtBottom={true}>
                    <div 
                        className={styles.notificationsContainer}
                    >
                        {/* <div className={styles.header} onClick= { () => this.togglePanel() }>
                            {`${notificationCount} notifications`}
                        </div> */}
                        <div className={styles.header}>
                            <i className={'ms-Icon ms-Icon--Calendar'} aria-hidden="true"></i> This Weeks Events:
                        </div>
                        <div className={styles.body}>
                            { eventsData.map((d) => 
                                <Task
                                    title={d['title']}
                                    description={d['description']}
                                    startTime={d['startDate']}
                                    endTime={d['endDate']}
                                    iconClass={d['type']}
                                    onDismiss={(id) => this.taskDismissed(id)}
                                />
                            )}
                        </div>
                        <div className={styles.header}>
                            <i className={'ms-Icon ms-Icon--Taskboard'} aria-hidden="true"></i> My Tasks:
                        </div>
                        <div className={styles.body}>
                            { tasksData.map((d) => 
                                <Task
                                    title={d['title']}
                                    description={d['description']}
                                    startTime={d['startDate']}
                                    endTime={d['endDate']}
                                    iconClass={d['type']}
                                    onDismiss={(id) => this.taskDismissed(id)}
                                />
                            )}
                        </div>
                        <div className={styles.header}>
                            <i className={'ms-Icon ms-Icon--People'} aria-hidden="true"></i> Tasks (from Utas API)
                        </div>
                        <div className={styles.body}>
                            { data.map((d) => 
                                <Task
                                    title={d['title']}
                                    description={{type: 'text', data: 'Hello World'}}
                                    startTime={d['startDate']}
                                    iconClass={d['type']}
                                    onDismiss={(id) => this.taskDismissed(id)}
                                />
                            )}
                        </div>
                    </div> 
                </Panel>
            </div>
        );
    }
}