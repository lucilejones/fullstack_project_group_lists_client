import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private pusher: any;
  private channel: any;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster
    });
   }

   subscribeToInvitationsChannel(userId: number) {
    this.channel = this.pusher.subscribe(`invitation_channel.${userId}`);
  }

  unsubscribeFromInvitationsChannel(userId: number) {
    if (this.channel) {
      this.channel.unsubscribe();
    }
  }

  get invitationChannel() {
    return this.channel;
  }

}
