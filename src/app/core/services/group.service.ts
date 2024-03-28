import { Injectable } from '@angular/core';
import { Group } from '../../shared/models/group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/groups`)
  }

  getUserGroups(id: any): Observable<Group[]> {
    return this.http.get<Group[]>(`${environment.apiUrl}/users/${id}/created_groups`)
  }
}
