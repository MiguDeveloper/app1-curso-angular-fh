import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.models';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() title: string = 'Listado';
  @Input({ required: true }) personajes: Character[] = [];
  @Output() removeCharacter = new EventEmitter<string>();

  onRemoveCharacter(id?: string): void {
    if (!id) {
      return;
    }
    this.removeCharacter.emit(id);
  }
}
