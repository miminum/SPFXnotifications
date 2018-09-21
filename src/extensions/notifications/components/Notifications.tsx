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
}

export default class Notifications extends React.Component<INotificationsProperties, INotificationsState> {
    constructor(props: INotificationsProperties) {
        super(props);
        const randomInteger = Math.floor(Math.random() * 11);
        this.state = {
            settingsLoaded: false,
            notificationCount: randomInteger,
            showContainer: false,
            data: []
        };
    }

    private toggleNotificationsBox(): void {
        this.setState({
            ...this.state,
            showContainer: !this.state.showContainer
        });
    } 

    public componentDidMount() {
        // window.addEventListener('click', this.hideNotifications.bind(this));
        this.initComponent();
    }

    private hideNotifications = () => {
         this.setState({
            ...this.state,
            showContainer: false
        });
    }

    private initComponent() {
        console.log('initComponent()');
        const graphService = new GraphService(this.props.context);
        const timsService = new TimsService;
        const dataHelper = new DataHelper; 
        
        const GraphDataCall = graphService.mockDataPromise();
        const TimsDataCall = timsService.mockDataPromise();
        Promise.all([GraphDataCall, TimsDataCall]).then(([GraphData, TimData]) => {
            dataHelper.dataParser(GraphData, TimData).then((data) => {
                console.log('2nd promise', data);
                this.setState({
                    ...this.state,
                    data: data
                });
            });
        });

        graphService.getNotifications();
        // Settings.Get([
        //     Constants.settings.apiURL
        // ]).then(settings => {
        //     stateToUpdate.settingsLoaded = true;
        //     this.setState(stateToUpdate);
        // });
    }

    private getFormattedDate(value:string) {
        let date = Moment(value);
        return date.isValid() ? date.format('HH:MM, DD MMM YYYY') : '';
    }

    private hidePanel = (): void => {
        console.log('hidePanel');
        this.setState({ showContainer: false });
    }

    public render(): React.ReactElement<INotificationsProperties> {
        const { notificationCount, showContainer, data } = this.state;
        const iconHelper = new IconHelper;
        return (
            <div className={styles.main}>
                <div 
                    className={styles.iconContainer}
                    onClick= { () => this.toggleNotificationsBox() }
                    style={{backgroundColor: showContainer && '#e12422'}}
                    >
                        <i className="ms-Icon ms-Icon--Plug"></i>
                        <span className={styles.count}>{notificationCount}</span>
                </div>

                <Panel 
                    headerText={'Notifications'}
                    isOpen={ showContainer }
                    onDismiss={ () => this.hidePanel() }
                    onLightDismissClick={ () => this.hidePanel() }
                    isLightDismiss={true}
                    isBlocking={false}
                    // onRenderFooterContent={ this.renderFooter.bind(this) }
                    isFooterAtBottom={true}>
                    <div 
                        className={styles.notificationsContainer}
                        style={{display: !!showContainer ? 'block' : 'none'}}
                    >
                        <div className={styles.header} onClick= { () => this.toggleNotificationsBox() }>
                            {`${notificationCount} notifications`}
                        </div>
                        <div className={styles.body}>
                            { data.map((d) => 
                                <Task
                                    title={d['title']}
                                    description={'Hello World'}
                                    startTime={d['startDate']}
                                    iconClass={d['type']}
                                />
                            )}
                        </div>
                    </div> 
                </Panel>
            </div>

        );
    }
}