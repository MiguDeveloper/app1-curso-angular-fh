import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-panel-a',
  standalone: true,
  imports: [CardModule, InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './panel-a.component.html',
  styleUrl: './panel-a.component.scss',
})
export class PanelAComponent {
  newTask = '';
  tasks = signal<string[]>(['Task 1', 'Task 2', 'Task 3']);
  inputTask = new FormControl('');

  addTask() {
    this.tasks.set([...this.tasks(), this.inputTask.value ?? '']);
    this.newTask = '';
  }

  changeFirstTask() {
    this.tasks.update((current) => {
      current[0] = `Task 1 (changed) ${new Date().getTime()}`;
      return current;
    });
  }

  check() {
    console.log('called in PanelAComponent');
    return true;
  }
}
