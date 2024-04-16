import { User } from "./user";

export class Invitation {
    id?: number;
    sender: User;
    // recipient: User;
    email: string;
    group_id: number;
    // message: string;
    accepted: boolean;

    constructor(invitation: any) {
        this.id = invitation.id || 0;
        this.sender = invitation.sender || null;
        this.email = invitation.email || "";
        this.group_id = invitation.group_id || null;
        // this.message = invitation.message || "";
        this.accepted = invitation.accepted || false;
    }
}
