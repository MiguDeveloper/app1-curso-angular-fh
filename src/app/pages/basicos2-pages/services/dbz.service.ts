import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.models';
import { v4 as uuidV4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  personajes: Character[] = [
    { id: uuidV4(), name: 'Krillin', power: 15000 },
    { id: uuidV4(), name: 'Vegeta', power: 7500 },
    { id: uuidV4(), name: 'Trunks', power: 7500 },
  ];

  constructor() {}

  addCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuidV4() };
    this.personajes = [...this.personajes, newCharacter];
  }

  removeCharacterById(id?: string): void {
    if (!id) {
      return;
    }
    this.personajes = this.personajes.filter(
      (personaje, index) => personaje.id !== id
    );
  }
}
