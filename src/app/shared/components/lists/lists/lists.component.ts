import { Component, OnInit } from '@angular/core';
import { List } from '../../../models/list';
import { User } from '../../../models/user';
import { RouterModule } from '@angular/router';
import { ListService } from '../../../../core/services/list.service';
import { UserService } from '../../../../core/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  lists: List[] = [];
  // listsSub: Subscription;
  currentUser: User | null = new User({});

  constructor(
    private listService: ListService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(()=> {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })

    this.listService.getUserLists(this.currentUser!.id).subscribe({
      next: (lists: List[]) => {
        this.lists = lists;
      },
      error: (error: any) => {
        console.error('Error fetching all lists.', error);
      }
    })

    // this.listsSub = this.listService.listsUpdated.subscribe(
    //   (updatedLists: List[]) => {
    //     this.lists = [...updatedLists];
    //   }
    // )

  }

}
