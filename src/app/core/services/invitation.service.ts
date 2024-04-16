import { Injectable } from '@angular/core';
import { Invitation } from '../../shared/models/invitation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(
    private http: HttpClient
  ) { }

  getAllInvitations(): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(`${environment.apiUrl}/invitations`)
  }

  getUserSentInvitations(id: any): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(`${environment.apiUrl}/users/${id}/sent_invitations`)
  }

  getUserReceivedInvitations(id: any): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(`${environment.apiUrl}/users/${id}/received_invitations`)
  }

  sendInvitation(invitation: any) {
    // return this.http.post(`${environment.apiUrl}/invitations`, invitation)
    return this.http.post(`${environment.apiUrl}/invitations`, {invitation})
  }

  updateInvitation(invitation: any) {
    return this.http.put(`${environment.apiUrl}/invitations/${invitation.id}`, invitation)
  }
}
