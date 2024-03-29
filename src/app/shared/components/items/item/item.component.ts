import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

}

// TODO: item service
// getOneItem
// add link to item name in ListComponent (with id)
// add detail view to ItemComponent (and update API)