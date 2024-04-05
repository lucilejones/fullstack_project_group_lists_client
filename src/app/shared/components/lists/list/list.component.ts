import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List } from '../../../models/list';
import { Item } from '../../../models/item';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ListService } from '../../../../core/services/list.service';
import { ItemComponent } from '../../items/item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  @Input({required:true}) list:List = new List({})
  // list:List = new List({});
  items: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.listService.getOneList(params['id']).subscribe({
            next: (list:List) => {
              console.log(list.group_id, "group_id")
              console.log(list.id, "list_id")
              this.list = list;
              this.items = list.items;
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    })
  }

  navigateToEditItemRoute(id: number) {
    this.router.navigate(['./', id, 'edit'], {
      relativeTo: this.route
    })
  }
}
