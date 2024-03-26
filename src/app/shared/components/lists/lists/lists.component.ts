import { Component, OnInit } from '@angular/core';
import { List } from '../../../models/list';;
import { RouterOutlet } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { ListService } from '../../../../core/services/list.service';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  lists: List[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getAllLists().subscribe({
      next: (lists: List[]) => {
        this.lists = lists;
      },
      error: (error: any) => {
        console.error('Error fetching all lists.', error);
      }
    })
  }
}
