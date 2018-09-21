export default class TaskItem {
    constructor(
        public title: string,
        public type: string,
        public startDate: Date,
        public linkUrl: string,
        public icon?: string,
        public photoUrl?: string,
    ) { }
}


