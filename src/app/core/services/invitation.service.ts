import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(
    private http: HttpClient
  ) { }

  sendInvitation(invitation: any, acceptInvitationUrl: string) {
    return this.http.post(`${environment.apiUrl}/invitations`, {invitation, acceptInvitationUrl})
  }
}
