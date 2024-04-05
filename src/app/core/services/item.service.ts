import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/items`)
  }

  getOneItem(id:string | number) {
    return this.http.get<Item>(`${environment.apiUrl}/items/${id}`)
  }

  createItem(item:Item) {
    return this.http.post(`${environment.apiUrl}/items`, item);
  }

  deleteItem(id:string | number) {
    return this.http.delete(`${environment.apiUrl}/items/${id}`)
  }

}
