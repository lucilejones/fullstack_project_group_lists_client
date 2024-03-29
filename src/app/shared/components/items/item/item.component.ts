import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Item } from '../../../models/item';
import { ItemService } from '../../../../core/services/item.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
  @Input({required:true}) item:Item = new Item({})
  // item:Item = new Item({});

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.itemService.getOneItem(params['id']).subscribe({
            next: (item:Item) => {
              console.log(item.name)
                this.item = item
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

  goBack() {
    this.router.navigate([`/lists/${this.item.list_id}`], { relativeTo: this.route} );
  }

}
