import { List } from './list';

export class Item {
    id: number;
    name: string;
    brand: string;
    store: string;
    notes: string;
    need_to_purchase: boolean;
    list: List;
    list_id: number;

    constructor(item: any) {
        this.id = item.id || 0;
        this.name = item.name || "";
        this.brand = item.brand || "";
        this.store = item.store || "";
        this.notes = item.notes || "";
        this.need_to_purchase = item.need_to_purchase || false;
        this.list = item.list || new List({});
        this.list_id = item.list_id || 0;
    }
}
