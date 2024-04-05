import { Injectable } from '@angular/core';
import { List } from '../../shared/models/list';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getAllLists(): Observable<List[]> {
    return this.http.get<List[]>(`${environment.apiUrl}/lists`);
  }

  getUserLists(id: any): Observable<List[]> {
    return this.http.get<List[]>(`${environment.apiUrl}/users/${id}/lists`);
  }

  getOneList(id:string | number) {
    return this.http.get<List>(`${environment.apiUrl}/lists/${id}`);
  }

  createList(list:List) {
    return this.http.post(`${environment.apiUrl}/lists`, list);
  }
}
