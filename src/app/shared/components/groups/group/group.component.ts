import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../../../core/services/group.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit{
  // @Input({required:true}) group:Group = new Group({})
  currentUser: User | null = null;
  group:Group = new Group({});
  members: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.groupService.getOneGroup(params['id']).subscribe({
            next: (group:Group) => {
              // console.log(group)
              // console.log(group.members)
              // console.log(group.lists)
              console.log(group.creator)
                this.group = group
            },
            error: (error) => {
                console.log(error);
            }
        })
    })

  this.userService.currentUserBehaviorSubject.subscribe((user) => {
    console.log(user)
    this.currentUser = user;
  })
  }
}

