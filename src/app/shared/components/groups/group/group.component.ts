import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from '../../../../core/services/group.service';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit{
  // @Input({required:true}) group:Group = new Group({})
  group:Group = new Group({});
  members: User[] = [];

  constructor(private route: ActivatedRoute, private groupService: GroupService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.groupService.getOneGroup(params['id']).subscribe({
            next: (group:Group) => {
              // console.log(group.members)
                this.group = group
            },
            error: (error) => {
                console.log(error);
            }
        })
    })
  }
}
