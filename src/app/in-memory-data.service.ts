
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './entities/task/models/Task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tasks = [
      { id: 11, title: 'Lavar la ropa', description: 'mucha ropa', done: false },
      { id: 12, title: 'Comprar fruta', description: 'Melones, Sandias, Manzanas', done: false },
      { id: 13, title: 'Arreglar silla', description: 'Arreglar la silla con el pegamento', done: true }
    ];
    return { tasks };
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }

}