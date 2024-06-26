import { User } from './user';
import { List } from './list';

export class Group {
    id?: number;
    name: string;
    creator: User;
    members: User[];
    lists: List[];
    user_id: User['id']

    constructor(group: any) {
        this.id = group.id || 0;
        this.name = group.name || "";
        this.creator = group.creator || new User({});
        this.members = group.members || [];
        this.lists = group.lists || [];
        this.user_id = group.user_id || 0;
    }
}
