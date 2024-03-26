import { Component, Input } from '@angular/core';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {
  @Input({required:true}) group:Group = new Group({})
}

// import { Component, Input } from '@angular/core';
// import { List } from '../../../models/list';

// @Component({
//   selector: 'app-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './list.component.html',
//   styleUrl: './list.component.scss'
// })
// export class ListComponent {
//   @Input({required:true}) list:List = new List({})
// }