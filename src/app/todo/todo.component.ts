import { from } from "rxjs";
import { Component } from '@angular/core';

@Component ({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {
    tasks: string[] = [];

    task: string;

    addTask() {
        this.tasks.push(this.task);
    }

    deleteTask(taskIndex : number) {
        this.tasks = this.tasks.filter((t, index) => index !== taskIndex );
    }

} 