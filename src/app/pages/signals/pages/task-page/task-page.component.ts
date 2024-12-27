import { Component } from '@angular/core';
import { PanelAComponent } from '../../components/panel-a/panel-a.component';
import { PanelBComponent } from '../../components/panel-b/panel-b.component';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [PanelAComponent, PanelBComponent],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss',
})
export class TaskPageComponent {}
