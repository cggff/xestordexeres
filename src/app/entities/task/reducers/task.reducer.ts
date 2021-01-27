import * as Actions from "../actions/task.actions";

import { Task } from "../models/Task";

export function taskReducer(state: Task[] = [], action) {
    switch (action.type) {
        case Actions.GET_TASKS:
            return [...state]; 
        case Actions.GET_TASKS_SUCCESS:
            return action.payload;
        case Actions.ADD_TASK:
            return [...state, action.payload];
        case Actions.DELETE_TASK:
            return [...state];
        case Actions.EDIT_TASK:
            return [...state];
        case Actions.SEARCH_TASK:
            return [...state];
        case Actions.SEARCH_TASK_SUCCESS:
            // if (action.payload.length === 0) {
            //     return [...state];
            // }
            return [...action.payload];
        default:
            return state;
    }
}

