import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { Invitation } from '../../models/invitation';
import { NotificationService } from '../../../core/services/notification.service';
import { UserService } from '../../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invitations',
  standalone: true,
  imports: [],
  templateUrl: './invitations.component.html',
  styleUrl: './invitations.component.scss'
})
export class InvitationsComponent implements OnInit, OnDestroy{
  currentUser: User | null = new User({})
  invitations: Invitation[] = [];
  invitationSubscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;

      // Subscribe to invitation channel when currentUser is available
      if (this.currentUser) {
        this.notificationService.subscribeToInvitationsChannel(this.currentUser.id);
        console.log(this.currentUser, "currentUser")
      }
    });

    this.invitationSubscription = this.notificationService.invitationChannel.subscribe({
      next: (invitations: Invitation[]) => {
        this.invitations = invitations;
        console.log(this.invitations, "invitations")
      },
      error: (error: any) => {
        console.error('Error fetching invitations', error);
      }
    })
  }

  ngOnDestroy(): void {
    // Unsubscribe from Pusher channel and other subscriptions
    if (this.invitationSubscription) {
      this.invitationSubscription.unsubscribe();
    }
    this.notificationService.unsubscribeFromInvitationsChannel(this.currentUser!.id);
  }
}
