export default class TaskItem {
    constructor(
        public title: string,
        public description: Object,
        public startDate: Date,
        public id: string,
        public linkUrl?: string,
        public endDate?: Date,
        public type?: string,
        public iconClass?: string,
        public photoUrl?: string,
    ) { }
}



