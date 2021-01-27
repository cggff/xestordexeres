import { Action, createAction } from "@ngrx/store";
import { Task } from "../models/Task";

export const ADD_TASK = "[TASK] Add";
export const ADD_TASK_SUCCESS = "[TASK] Add Success";
export const ADD_TASK_ERROR = "[TASK] Add Error";

export const DELETE_TASK = "[TASK] Delete";
export const DELETE_TASK_SUCCESS = "[TASK] Delete Success";
export const DELETE_TASK_ERROR = "[TASK] Delete Error";

export const EDIT_TASK = "[TASK] Edit";
export const EDIT_TASK_SUCCESS = "[TASK] Edit Success";
export const EDIT_TASK_ERROR = "[TASK] Edit Error";

export const SEARCH_TASK = "[TASK] Search";
export const SEARCH_TASK_SUCCESS = "[TASK] Search Sucess";
export const SEARCH_TASK_ERROR = "[TASK] Search Error";

export const GET_TASKS = "[TASK] Tasks Load";
export const GET_TASKS_SUCCESS = "[TASK] Tasks Loaded Success";
export const GET_TASKS_ERROR = "[TASK] Tasks Loaded Error";

export const GET_TASK = "[TASK] Task Loaded Success";
export const GET_TASK_ERROR = "[TASK] Task Loaded Error";

export class AddTask implements Action {
    readonly type = ADD_TASK;
    constructor(public payload: Task) { }
}

export class AddTaskSuccess implements Action {
    readonly type = ADD_TASK_SUCCESS;
    constructor(public payload: Task) { }
}

export class AddTaskError implements Action {
    readonly type = ADD_TASK_ERROR;
    constructor(public payload: Task) { }
}

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;
    constructor(public payload: Task) { }
}

export class DeleteTaskSuccess implements Action {
    readonly type = DELETE_TASK_SUCCESS;
    constructor(public payload: Task) { }
}

export class DeleteTaskError implements Action {
    readonly type = DELETE_TASK_ERROR;
    constructor(public payload: Task) { }
}

export class EditTask implements Action {
    readonly type = EDIT_TASK;
    constructor(public payload: Task) { }
}

export class EditTaskSucess implements Action {
    readonly type = EDIT_TASK_SUCCESS;
    constructor(public payload: Task) { }
}

export class EditTaskError implements Action {
    readonly type = EDIT_TASK_ERROR;
    constructor(public payload: Task) { }
}

export class SearchTask implements Action {
    readonly type = SEARCH_TASK;
    constructor(public payload: string) { }
}

export class SearchTaskSuccess implements Action {
    readonly type = SEARCH_TASK_SUCCESS;
    constructor(public payload: Task) { }
}

export class SearchTaskError implements Action {
    readonly type = SEARCH_TASK_ERROR;
    constructor(public payload: Task) { }
}

export const GetTasks = createAction(GET_TASKS);

export class GetTasksSuccess implements Action {
    readonly type = GET_TASKS_SUCCESS;
    constructor(public payload: Task) { }
}

export class GetTasksError implements Action {
    readonly type = GET_TASKS_ERROR;
    constructor(public payload: Task) { }
}

export class GetTask implements Action {
    readonly type = GET_TASK;
    constructor(public payload: Task) { }
}

export class GetTaskError implements Action {
    readonly type = GET_TASK_ERROR;
    constructor(public payload: Task) { }
}

export type TaskActions = AddTask | AddTaskSuccess | AddTaskError | DeleteTask | DeleteTaskSuccess | DeleteTaskError | EditTask | SearchTask | GetTasksSuccess | GetTasksError | GetTask | GetTaskError;