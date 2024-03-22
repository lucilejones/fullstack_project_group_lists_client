import { User } from './user';

export class List {
    id: number;
    name: string;
    user?: User;

    constructor(list: any) {
        this.id = list.id || 0;
        this.name = list.name || "";
        this.user = list.user || null;
    }
}
