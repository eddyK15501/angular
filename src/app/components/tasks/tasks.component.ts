import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { TaskBoxComponent } from '../task-box/task-box.component';
import { Task } from '../../tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, NgFor, TaskBoxComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> = of([]);

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();
    
    this.tasks$.subscribe(data => console.log(data));
  }
}
