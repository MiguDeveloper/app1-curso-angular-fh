import { MsgValidationFieldDirective } from '@core/directives/msg-validation-field.directive';
import { JsonPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    MsgValidationFieldDirective,
    CommonModule,
  ],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss',
})
export class DynamicPageComponent {
  private _fb = inject(FormBuilder);
  newFavoriteGame = new FormControl('', Validators.required);
  formDynamic = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this._fb.array([]),
  });

  get favoriteGames(): FormArray {
    return this.formDynamic.get('favoriteGames') as FormArray;
  }

  addGame() {
    this.newFavoriteGame.markAllAsTouched();
    if (this.newFavoriteGame.invalid) return;
    const newGame = this.newFavoriteGame.value;
    this.favoriteGames.push(this._fb.control(newGame, Validators.required));
    this.newFavoriteGame.reset();
  }

  removeGame(index: number) {
    this.favoriteGames.removeAt(index);
  }

  submitForm() {
    if (this.formDynamic.invalid) {
      this.formDynamic.markAllAsTouched();
      return;
    }
    console.log(this.formDynamic.value);
    this.favoriteGames.clear();
    this.formDynamic.reset();
  }
}
