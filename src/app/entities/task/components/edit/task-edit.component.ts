import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from './../../models/Task';


@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

    @Input()
    task: Task;

    @Output()
    taskUpdated = new EventEmitter<Task>();

    isChecked: boolean = false;

    taskFromControlGroup: FormGroup;

    ngOnInit() {
        this.task = new Task();

        this.taskFromControlGroup = new FormGroup({
            title: new FormControl(
                this.task.title,
                [
                    Validators.required
                ]
            ),
            description: new FormControl(
                this.task.description
            ),
            // priority: new FormControl(
            //     this.task.priority
            // ),
            done: new FormControl(
                this.task.done
            )
        });
    }

    cancel(): void {
        this.taskUpdated.emit();
    }

    save(): void {
        this.taskUpdated.emit(this.task);
    }

    get titleFormControl() {
        return this.taskFromControlGroup.get('title');
    }

    get descriptionFormControl() {
        return this.taskFromControlGroup.get('description');
    }

    get doneFormControl() {
        return this.taskFromControlGroup.get('done');
    }

    // get priorityFormControl() {
    //     return this.taskFromControlGroup.get('priority');
    // }

}
