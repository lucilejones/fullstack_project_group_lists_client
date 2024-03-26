import { Component, Input } from '@angular/core';
import { List } from '../../../models/list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input({required:true}) list:List = new List({})
}
