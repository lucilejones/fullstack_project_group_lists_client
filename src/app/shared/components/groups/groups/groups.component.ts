import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { RouterOutlet } from '@angular/router';
import { GroupComponent } from '../group/group.component';
import { GroupService } from '../../../../core/services/group.service';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [RouterOutlet, GroupComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  groups: Group[] = []

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe({
      next: (groups: Group[]) => {
        this.groups = groups;
      },
      error: (error: any) => {
        console.error('Error fetching all groups.', error);
      }
    })
  }
}
