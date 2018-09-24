export default class IconHelper {
    public convertTypetoIcon(type:string): string {
        switch (type.toLowerCase()) {
            case "email": {
                return "ms-Icon--Mail";
            }
            case "meeting": {
                return "ms-Icon--JoinOnlineMeeting";
            }
            case "event": {
                return "ms-Icon--Event";
            }
            case "alert": {
                return "ms-Icon--AlertSolid";
            }
            case "social": {
                return "ms-Icon--People";
            }
        }
    }
}