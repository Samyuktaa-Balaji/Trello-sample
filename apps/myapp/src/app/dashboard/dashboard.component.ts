import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog} from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  doing = [
    'Cooking',
    'Washing'
  ];

  qa = [
    	'Mom review',
      'Dog cleanliness'
  ]

  constructor(private dialog:MatDialog) { }

  OnCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "31%";
    dialogConfig.data = "";
    const dialogRef = this.dialog.open(AddTaskComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data!==undefined && dialogConfig.data==""){
          this.todo.push(data);
        }
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  edit(item:string){
    var i = this.todo.indexOf(item);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "31%";
    dialogConfig.data = item;
    const dialogRef = this.dialog.open(AddTaskComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data!==undefined){
          this.todo[i] = data;
        }
      }
    );
  }

  delete(item:string){
    var i = this.todo.indexOf(item);
    this.todo.splice(i, 1);
  }

}
