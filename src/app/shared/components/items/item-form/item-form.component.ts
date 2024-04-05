import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../../core/services/user.service';
import { ItemService } from '../../../../core/services/item.service';
import { List } from '../../../models/list';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent implements OnInit {
  currentUser: User | null = new User({})
  listId: number | null = null;

  itemForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    store: new FormControl(''),
    notes: new FormControl(''),
    need_to_purchase: new FormControl(false),
    // list_id: new FormControl(this.listId)
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(() => {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })

    this.route.params.subscribe((params: Params) => {
      this.listId = params['id']
      console.log(this.listId)
    })
  }

  onCreateItem() {
    console.log(this.itemForm.value)

    const item: Item = {
      list_id: this.listId,
      ...this.itemForm.value
    }
    this.itemService.createItem(item).subscribe({
      next: () => {
        this.router.navigate(['/lists', this.listId])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
