import { Task } from './entities/task/models/Task';

export interface AppState {
  readonly tasks: Task[];
}
