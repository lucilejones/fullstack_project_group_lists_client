import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { RouterModule } from '@angular/router';
import { GroupComponent } from '../group/group.component';
import { GroupService } from '../../../../core/services/group.service';
import { UserService } from '../../../../core/services/user.service';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [RouterModule, GroupComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit{
  createdGroups: Group[] = []
  joinedGroups: Group[] = []
  currentUser: User | null = new User({})

  constructor(
    private groupService: GroupService,
    private userService: UserService) {}


  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(()=> {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })

    this.groupService.getUserCreatedGroups(this.currentUser!.id).subscribe({
      next: (groups: Group[]) => {
        console.log(groups)
        this.createdGroups = groups;
      },
      error: (error: any) => {
        console.error('Error fetching user created groups.', error);
      }
    })

    this.groupService.getUserJoinedGroups(this.currentUser!.id).subscribe({
      next: (groups: Group[]) => {
        console.log(groups)
        this.joinedGroups = groups;
      },
      error: (error: any) => {
        console.error('Error fetching user joined groups.', error);
      }
    })
  }

  
}
