import { Component, Input, OnInit } from "@angular/core";

import { Task } from '../../models/Task';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks?: Task[];

  @Input()
  searchText: string;

  constructor() {
  }

  ngOnInit() {
  }
}
