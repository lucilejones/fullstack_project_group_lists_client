import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../../core/services/user.service';
import { Invitation } from '../../../models/invitation';
import { environment } from '../../../../../environments/environment';
import { InvitationService } from '../../../../core/services/invitation.service';

@Component({
  selector: 'app-invite-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './invite-user-form.component.html',
  styleUrl: './invite-user-form.component.scss'
})
export class InviteUserFormComponent implements OnInit {
  currentUser: User | null = new User({})
  groupId: number | null = null;

  invitationForm: FormGroup = new FormGroup({
    email: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private invitationService: InvitationService
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })

    this.route.params.subscribe((params: Params) => {
      this.groupId = params['id']
      console.log(this.groupId, "groupId")
    })
  }

  onCreateInvitation() {
    // console.log(this.invitationForm.value)

    const invitation: Invitation = {
      group_id: this.groupId!,
      sender: this.currentUser!,
      email: this.invitationForm.value.email,
      accepted: false
    }

    console.log(invitation)

    this.invitationService.sendInvitation(invitation).subscribe({
      next: () => {
        this.router.navigate(['/groups', this.groupId]);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
