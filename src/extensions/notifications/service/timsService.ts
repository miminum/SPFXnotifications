import { Settings } from '@e2/settings';

export interface ITimsNotification {
    title: string;
    type: string;
    startDate: Date;
    endDate: Date;
}

export default class TimsService {
    public mockDataPromise(): Promise<Array<{}>> {
        const MockData = [
            {
                title: "University Opening Day",
                type: "Event",
                startDate: "2018-09-17T09:42:26Z",
                endDate: "",
            },
            {
                title: "1 : 1 with Rufus Black",
                type: "Meeting",
                startDate: "2018-09-16T03:42:26Z",
                endDate: "",
            },
            {
                title: "UTAS Ball Comping Up",
                type: "Social",
                startDate: "2018-09-17T04:42:26Z",
                endDate: "",
            },
            {
                title: "Hawthorn vs Melbourne",
                type: "Sports",
                startDate: "2018-09-17T04:42:26Z",
                endDate: "2018-09-16T04:42:26Z",
            },
            {
                title: "Stranger Danger",
                type: "Alert",
                startDate: "2018-09-18T00:42:26Z",
                endDate: "",
            }
        ];
        return Promise.resolve(MockData);
    }
}