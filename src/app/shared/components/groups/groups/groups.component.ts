import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { RouterOutlet } from '@angular/router';
import { GroupComponent } from '../group/group.component';
// group service


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [RouterOutlet, GroupComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  groups: Group[] = [
    new Group({
      id: 1, 
      name: "Barton Family",
      user: {
        username: "Hannahwrites",
        email: "hannahbarton@email.com",
        first_name: "Hannah",
        last_name: "Barton"
      }
    }),
    new Group({
      id: 2, 
      name: "Green Family",
      user: {
        username: "SarahBeth",
        email: "sarahbetha@email.com",
        first_name: "Sarah",
        last_name: "Houston"
      }
    }),
    new Group({
      id: 3, 
      name: "Tuft Reunion",
      user: {
        username: "AmyYoshi",
        email: "amy@email.com",
        first_name: "Amy",
        last_name: "Townes"
      }
    })
  ];
}

// TODO: create group service and seed groups (created groups) in the API
//   constructor(private listService: ListService) {}

//   ngOnInit(): void {
//     this.listService.getAllLists().subscribe({
//       next: (lists: List[]) => {
//         this.lists = lists;
//       },
//       error: (error: any) => {
//         console.error('Error fetching all lists.', error);
//       }
//     })
//   }
// }