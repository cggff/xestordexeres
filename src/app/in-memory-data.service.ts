
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './entities/task/models/Task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tasks = [
      { id: 11, title: 'Comprar un robot', description: '', done: false },
      { id: 12, title: 'Pensar un nombre', description: 'Robotico, Hojalata, Rigoberto', done: false },
      { id: 13, title: 'Soñar despierto', description: '', done: true }
    ];
    return { tasks };
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }

}
