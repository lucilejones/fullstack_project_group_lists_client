import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Invitation } from '../../models/invitation';
import { UserService } from '../../../core/services/user.service';
import { InvitationService } from '../../../core/services/invitation.service';
import { GroupService } from '../../../core/services/group.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invitations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './invitations.component.html',
  styleUrl: './invitations.component.scss'
})
export class InvitationsComponent implements OnInit {
  currentUser: User | null = new User({})
  invitations: Invitation[] = [];

  constructor(
    private userService: UserService,
    private invitationService: InvitationService,
    private groupService: GroupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    });

    this.invitationService.getUserReceivedInvitations(this.currentUser!.id).subscribe({
      next: (invitations: Invitation[]) => {
        console.log(invitations)
        this.invitations = invitations;
      },
      error: (error: any) => {
        console.error('Error fetching invitations', error);
      }
    })

  }

  joinGroup(invitation: Invitation, group_id: any) {
    const updatedInvitation: Invitation = {
      ...invitation,
      accepted: true
    }
    console.log(updatedInvitation)
    this.invitationService.updateInvitation(updatedInvitation).subscribe({
      next: () => {
        console.log('Invitation updated successfully:', updatedInvitation);

        this.groupService.joinGroup(group_id).subscribe({
          next: () => {
            console.log('Joined group successfully.');
            this.router.navigate(['/groups', group_id])
          },
          error: (error: any) => {
            console.error('Error joining group.', error);
          }
        });
      },
      error: (error) => {
        console.log('Error updating invitation:', error);
      }
    })

  }

}
