import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-panel-b',
  standalone: true,
  imports: [CardModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './panel-b.component.html',
  styleUrl: './panel-b.component.scss',
})
export class PanelBComponent {
  newTask = '';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
  inputTask = new FormControl('');

  addTask() {
    this.tasks.push(this.inputTask.value ?? '');
    this.newTask = '';
  }

  changeFirstTask() {
    this.tasks[0] = `Task 1 (changed) ${new Date().getTime()}`;
  }

  check() {
    console.log('called in PanelBComponent');
    return true;
  }
}
