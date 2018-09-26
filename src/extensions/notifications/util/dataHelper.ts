import TaskItem from "../model/TaskItem";

export default class DataHelper {
    
    public dataParser(graphData, timsData): Promise<Array<{}>> {
        const graphArray = this.graphDataMapper(graphData);
        let combinedData = graphArray.concat(timsData);
        // combinedData.sort((a,b) => 

        // );
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

    public mapOutlookTasks(tasksData): TaskItem[] {
        let mappedData = [];
        tasksData.map((taskData) => {
            let mappedObject: {[k: string]: any} = {};
            mappedObject.title = taskData.subject;
            mappedObject.description = { type: 'text', data: this.stripHtml(taskData.body.content) };
            mappedObject.type = "task";
            mappedObject.startDate = null;
            mappedObject.endDate = taskData.dueDateTime.dateTime;
            mappedData.push(mappedObject);
        });
        return mappedData;
    }

    private stripHtml(html):string {
        // Removes Comments & LineBreaks
        html = html.replace(/<!--[\s\S]*?-->|\r|\n/g, '');
        // Create a new div element
        let temporalDivElement = document.createElement("div");
        // Set the HTML content with the providen
        temporalDivElement.innerHTML = html;
        // Retrieve the text property of the element (cross-browser support)
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }
}