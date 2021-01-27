import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from "@ngrx/store";

import * as TaskActions from './../../actions/task.actions';

import { TaskDeleteDialogComponent } from '../delete/task-delete-dialog.component';

import { Task } from '../../models/Task';
import { AppState } from './../../../../app.state';


@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  @Input() task?: Task;

  @Input() searchText: string;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog) { }

  deleteTask() {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch({
          type: TaskActions.DELETE_TASK,
          payload: this.task
        });
      }
    });
  }

  taskCompleted() {
    console.log(this.task);
    this.store.dispatch({
      type: TaskActions.EDIT_TASK,
      payload: {
        id: this.task.id,
        title: this.task.title,
        description: this.task.description,
        done: true
      }
    });
  }

}
