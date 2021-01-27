import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TaskActions from './../actions/task.actions';
import { TaskService } from './../services/task.service';
import { Task } from './../models/Task';


@Injectable()
export class TaskEffects {

  constructor(
    private taskService: TaskService,
    private actions$: Actions) {
  }

  getTask$ = createEffect(() => {
    console.log("task.effects::getTask");
    return this.actions$.pipe(
      ofType(TaskActions.GET_TASKS),
      mergeMap(() => {
        return this.taskService.getTasks()
          .pipe(
            map(data => {
              return ({ type: TaskActions.GET_TASKS_SUCCESS, payload: data });
            }),
            catchError(() => {
              console.log("error ");
              return of({ type: TaskActions.GET_TASKS_ERROR })
            })
          )
      })
    )
  });

  addTask$ = createEffect(() => {
    console.log("task.effects::addTask");
    return this.actions$.pipe(
      ofType(TaskActions.ADD_TASK),
      mergeMap((action: TaskActions.AddTask) => {
         return this.taskService.addTask(action.payload)
          .pipe(
            map(data => {
              return ({ type: TaskActions.ADD_TASK_SUCCESS, payload: data });
            }),
            catchError(() => {
              return of({ type: TaskActions.ADD_TASK_ERROR })
            })
          )
      })
    )
  });

  deleteTask$ = createEffect(() => {
    console.log("task.effects::deleteTask");
    return this.actions$.pipe(
      ofType(TaskActions.DELETE_TASK),
      mergeMap((action: TaskActions.DeleteTask) => {
        return this.taskService.deleteTask(action.payload)
          .pipe(
            map(data => {
              return ({ type: TaskActions.GET_TASKS, payload: null });
            }),
            catchError(() => {
              return of({ type: TaskActions.DELETE_TASK_ERROR })
            })
          )
      })
    )
  });

  editTask$ = createEffect(() => {
    console.log("task.effects::editTask");
    return this.actions$.pipe(
      ofType(TaskActions.EDIT_TASK),
      mergeMap((action: TaskActions.EditTask) => {
        return this.taskService.updateTask(action.payload)
          .pipe(
            map(data => {
              return ({ type: TaskActions.GET_TASKS, payload: null });
            }),
            catchError(() => {
              return of({ type: TaskActions.DELETE_TASK_ERROR })
            })
          )
      })
    )
  });

  searchTask$ = createEffect(() => {
    console.log("task.effects::searchTask");
    return this.actions$.pipe(
      ofType(TaskActions.SEARCH_TASK),
      mergeMap((action: TaskActions.SearchTask) => {
        return this.taskService.searchTasks(action.payload)
          .pipe(
            map(data => {
              return ({ type: TaskActions.SEARCH_TASK_SUCCESS, payload: data });
            }),
            catchError(() => {
              console.log("error ");
              return of({ type: TaskActions.SEARCH_TASK_ERROR })
            })
          )
      })
    )
  });

}
