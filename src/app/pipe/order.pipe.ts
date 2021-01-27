import { Pipe, PipeTransform } from '@angular/core';

import { Task } from './../entities/task/models/Task';

@Pipe({ name: 'orderByStatus' }) 
export class OderbyStatusPipe implements PipeTransform {

    transform(tasks: Array<Task>) {
        if (tasks == null || tasks.length == 0) {
            return [];
        }

        const aux = tasks.slice();
        var sortedArray: Task[] = aux.sort((order1, order2) => {
            const n1 = order1.done;
            const n2 = order2.done;
            if (n1 == n2) { 
                return 0;
            } 
            if (n1) {
                return 1; 
            }
            return -1;
        });

        return sortedArray;
    }

}