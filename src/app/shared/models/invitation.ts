import { User } from "./user";

export class Invitation {
    // id: number;
    sender: User;
    email: string;
    group_id: number;

    constructor(invitation: any) {
        // this.id = invitation.id || 0;
        this.sender = invitation.sender || null;
        this.email = invitation.email || "";
        this.group_id = invitation.group_id || null;
    }
}
