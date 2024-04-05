import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { Group } from '../../../models/group';
import { User } from '../../../models/user';
import { GroupService } from '../../../../core/services/group.service';
import { UserService } from '../../../../core/services/user.service';
import { ListService } from '../../../../core/services/list.service';

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
    group_id: new FormControl(null)
  })
  currentUser: User | null = new User({})
  groups: Group[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private groupService: GroupService,
    private listService: ListService
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
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onCreateList() {
    // console.log(this.listForm.value)
    this.listService.createList(this.listForm.value).subscribe({
      next: () => {
        this.router.navigate(['/lists'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}

