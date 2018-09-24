import TaskItem from "../model/TaskItem";

export default class DataHelper {
    
    public dataParser(graphData, timsData): Promise<Array<{}>> {
        const graphArray = this.graphDataMapper(graphData);
        let combinedData = graphArray.concat(timsData);
        // combinedData.sort((a,b) => 

        // );
        console.log('dataParser:', combinedData); 
        return Promise.resolve(combinedData);
    }

    private graphDataMapper(graphData): TaskItem[] {
        let newData = [];
        graphData.map((data) => {
            let newObj: {[k: string]: any} = {};
            newObj.title = data.subject;
            newObj.type = 'email';
            newObj.startDate = data.receivedDateTime;
            newObj.linkUrl = 'www.google.com.au';
            newData.push(newObj);
        });
        return newData;
    }
    
    public mapEvents(eventsData): TaskItem[] {
        let mappedData = [];
        eventsData.map((eventData) => {
            let mappedObject: {[k: string]: any} = {};
            mappedObject.title = eventData.subject;
            mappedObject.linkUrl = eventData.webLink;
            mappedObject.startDate = eventData.start.dateTime;
            mappedObject.type = 'event';
            mappedObject.endDate = eventData.end.dateTime;
            mappedObject.description = { type: 'location', data: eventData.location.displayName };
            mappedData.push(mappedObject);
        });
        return mappedData;
    } 
}