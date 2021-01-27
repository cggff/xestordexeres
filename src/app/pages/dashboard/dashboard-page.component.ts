import { Component, OnInit } from "@angular/core";
import { AppState } from "../../app.state";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { map } from 'rxjs/operators';

import * as TaskActions from './../../entities/task/actions/task.actions';
import { GetTasks } from './../../entities/task/actions/task.actions';
import { Task } from './../../entities/task/models/Task';
import { TaskService } from './../../entities/task/services/task.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  tasks: Task[] = [];
  taskSubscription: Subscription;
  tasksObservable: Observable<Task[]>;

  searchText: string = "";

  constructor(
    private taskService: TaskService,
    private store: Store<AppState>) {
    this.tasksObservable = store.select("tasks");
  }

  ngOnInit() {
    this.taskSubscription = this.tasksObservable
      .pipe(
        map(data => {
          this.tasks = data;
        })
      )
      .subscribe();

    this.store.dispatch(GetTasks());
  }

  ngOnDestroy() {
    if (this.taskSubscription) {
      this.taskSubscription.unsubscribe();
    }
  }

  search(text) {
    this.searchText = text;
    if (text.length > 0) {
      this.store.dispatch({
        type: TaskActions.SEARCH_TASK,
        payload: text
      });
    } else {
      this.store.dispatch({
        type: TaskActions.GET_TASKS,
        payload: text
      });
    }
  }

}
