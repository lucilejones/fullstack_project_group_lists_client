import { User } from './user';

export class Group {
    id: number;
    name: string;
    user?: User;
    // change this to creator?
    members: User[];

    constructor(group: any) {
        this.id = group.id || 0;
        this.name = group.name || "";
        this.user = group.user || null;
        // this.creator = group.creator || new User({});
        this.members = group.members || [];
    }
}
