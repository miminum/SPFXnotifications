import ITimsNotification from "../service/timsService";


export default class DataHelper {
    
    public dataParser(graphData, timsData): Promise<Array<{}>> {
        const graphArray = this.graphDataMapper(graphData);
        let combinedData = graphArray.concat(timsData);
        // combinedData.sort((a,b) => 

        // );
        console.log('dataParser:', combinedData); 
        return Promise.resolve(combinedData);
    }

    private graphDataMapper(graphData): ITimsNotification[] {
        let newData = [];
        graphData.map((data) => {
            let newObj: {[k: string]: any} = {};
            newObj.title = data.subject;
            newObj.type = 'email';
            newObj.startDate = data.receivedDateTime;
            newObj.endDate = data.receivedDateTime;
            newData.push(newObj);
        });
        return newData;
    }
}