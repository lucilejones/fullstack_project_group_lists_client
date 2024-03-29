import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../models/list';
import { Item } from '../../../models/item';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../../../core/services/list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
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
            error: (error) => {
                console.log(error);
            }
        })
    })
  }
}
