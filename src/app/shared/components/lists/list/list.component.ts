import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../models/list';
import { Item } from '../../../models/item';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { ListService } from '../../../../core/services/list.service';
import { ItemComponent } from '../../items/item/item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  // @Input({required:true}) list:List = new List({})
  list:List = new List({});
  items: Item[] = [];

  constructor(private route: ActivatedRoute, private listService: ListService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.listService.getOneList(params['id']).subscribe({
            next: (list:List) => {
              // console.log(list.items)
                this.list = list
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    })
  }
}
