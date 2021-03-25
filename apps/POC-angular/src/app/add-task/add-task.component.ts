import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string;

  constructor(private dialogRef: MatDialogRef<AddTaskComponent>,@Inject(MAT_DIALOG_DATA) public data:string) { 
    this.text = this.data;
  }
  

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close(this.text);
  }

}
