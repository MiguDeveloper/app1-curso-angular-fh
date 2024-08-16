import { Component, inject } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { AddCharacterComponent } from '../../components/add-character/add-character.component';
import { Character } from '../../interfaces/character.models';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-dbz-page',
  standalone: true,
  imports: [ListComponent, AddCharacterComponent],
  templateUrl: './main-dbz-page.component.html',
  styleUrl: './main-dbz-page.component.scss',
})
export class MainDbzPageComponent {
  private _characterService = inject(DbzService);

  get characters(): Character[] {
    return [...this._characterService.personajes];
  }
  toggleAddCharacter(personaje: Character): void {
    this._characterService.addCharacter(personaje);
  }

  toggleRemoveCharacter(idx: string): void {
    this._characterService.removeCharacterById(idx);
  }
}
