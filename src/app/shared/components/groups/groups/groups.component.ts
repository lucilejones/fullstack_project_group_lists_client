import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GroupComponent } from '../group/group.component';
import { GroupService } from '../../../../core/services/group.service';
import { UserService } from '../../../../core/services/user.service';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [RouterModule, RouterOutlet, GroupComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit{
  groups: Group[] = []
  currentUser: User | null = new User({})

  constructor(
    private groupService: GroupService,
    private userService: UserService) {}


  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(()=> {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })

    this.groupService.getUserGroups(this.currentUser!.id).subscribe({
      next: (groups: Group[]) => {
        this.groups = groups;
      },
      error: (error: any) => {
        console.error('Error fetching user groups.', error);
      }
    })
  }
}
