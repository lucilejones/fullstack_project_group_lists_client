import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { GroupService } from '../../../../core/services/group.service';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-form.component.html',
  styleUrl: './list-form.component.scss'
})
export class ListFormComponent implements OnInit{
  listForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    // groupIds: new FormArray([])
    groupId: new FormControl(null)
  })
  currentUser: User | null = new User({})
  groups: Group[] = [];

  constructor(
    private userService: UserService,
    private groupService: GroupService
    ) {}

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe(()=> {
      this.currentUser = this.userService.currentUserBehaviorSubject.value;
    })

    this.loadGroupIds();
  }

  addGroupToForm(name:any) {
    (this.listForm.get("groupIds") as FormArray).push(new FormControl(name))
  }

  loadGroupIds() {
    this.groupService.getUserJoinedGroups(this.currentUser!.id).subscribe({
      next: (groups: any) => {
        this.groups = groups;
        // groups.forEach((group:Group) => {
        //   this.addGroupToForm(group.name)
        // })
        // const groupIds = this.groups.map((group) => group.id)
        // console.log(groupIds);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  get groupIds(): FormArray {
    return this.listForm.get("groupIds") as FormArray;
  }

  extractGroupIds() {

  }

  onCreateList() {
    console.log(this.listForm.value)
  }

}

// TODO: need to have an optional group to add to
// iterate through the user's groups (created and joined)
// in order to have a dropdown to choose from