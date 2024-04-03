import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Group } from '../../../models/group';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [],
  templateUrl: './list-form.component.html',
  styleUrl: './list-form.component.scss'
})
export class ListFormComponent implements OnInit{
  listForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    groupIds: new FormArray([])
  })

  ngOnInit(): void {
    this.loadGroupIds();
  }

  groups: Group[] = [];

  loadGroupIds() {
    
  }
}

// TODO: need to have an optional group to add to
// iterate through the user's groups (created and joined)
// in order to have a dropdown to choose from