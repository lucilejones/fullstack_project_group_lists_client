import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../../../models/list';
import { Item } from '../../../models/item';
import { ItemService } from '../../../../core/services/item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
  // @Input({required:true}) list:List = new List({})
  // id: number = this.list.id;
  item:Item = new Item({});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.itemService.getOneItem(params['id']).subscribe({
            next: (item:Item) => {
              // console.log(item.list_id)
                this.item = item
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    })
  }

  goBack() {
    this.router.navigate([`/lists/${this.item.list_id}`], { relativeTo: this.route} );
  }

}
