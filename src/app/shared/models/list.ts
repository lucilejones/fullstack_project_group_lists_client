import { User } from './user';
import { Item } from './item';
import { Group } from './group';

export class List {
    id: number;
    name: string;
    items: Item[];
    user?: User;
    group_id: number;
    group: Group;

    constructor(list: any) {
        this.id = list.id || 0;
        this.name = list.name || "";
        this.items = list.items;
        this.user = list.user || null;
        this.group_id = list.group_id || null;
        this.group = list.group || null;
    }
}
