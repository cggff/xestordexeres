import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from "@ngrx/store";

import { TaskService } from './../../entities/task/services/task.service';
import { Task } from './../../entities/task/models/Task';
import * as TaskActions from './../../entities/task/actions/task.actions';

import { AppState } from './../../app.state';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  task: Task;

  constructor(
    private taskService: TaskService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.task = new Task();

    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    if (id == null || id === 0) {
      this.task = new Task();
    } else {
      // TODO Hay que quitar el servicio de aqui
      this.taskService.getTask(id)
        .subscribe(task => {
          this.task = task;
        });
    }
  }

  updateTask(task): void {
    if (task != null) {
      if (task.id) {
        this.store.dispatch({
          type: TaskActions.EDIT_TASK,
          payload: task
        });
      } else {
        this.store.dispatch({
          type: TaskActions.ADD_TASK,
          payload: task
        });
      }
      this.location.back();
    } else {
      this.location.back();
    }
  }

  search(text) {
    // No se ejecuta esta funcion
    console.log("Buscar ", text);
  }

}
