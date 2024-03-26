import { User } from './user';

export class Group {
    id: number;
    name: string;
    user?: User;

    constructor(group: any) {
        this.id = group.id || 0;
        this.name = group.name || "";
        this.user = group.user || null;
    }
}
