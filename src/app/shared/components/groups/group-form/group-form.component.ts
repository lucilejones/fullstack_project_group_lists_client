import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { Group } from '../../../models/group';
import { GroupService } from '../../../../core/services/group.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-group-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './group-form.component.html',
  styleUrl: './group-form.component.scss'
})
export class GroupFormComponent implements OnInit {
  currentUser: User | null = new User({})
  userId: number | null = null;
  lists = [];
  members = [];

  groupForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })

  constructor(
    private router: Router,
    private userService: UserService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })
  }

  onCreateGroup() {
    console.log(this.groupForm.value);

    const group: Group = {
      creator: this.currentUser!,
      user_id: this.currentUser!.id,
      lists: this.lists,
      members: this.members,
      name: this.groupForm.value.name
    }

    console.log(group)

    this.groupService.createGroup(group).subscribe({
      next: () => {
        this.router.navigate(['/groups']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
