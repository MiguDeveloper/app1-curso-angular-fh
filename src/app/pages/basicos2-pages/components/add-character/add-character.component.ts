import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Character } from '../../interfaces/character.models';

@Component({
  selector: 'app-dbz-add-character',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    JsonPipe,
    InputTextModule,
    CommonModule,
  ],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss',
})
export class AddCharacterComponent {
  @Input() title: string = 'Agregar';
  @Output() character = new EventEmitter<Character>();
  private readonly _fb = inject(FormBuilder);

  characterForm = this._fb.nonNullable.group({
    name: ['', [Validators.required]],
    power: [0, [Validators.required, Validators.min(10)]],
  });

  submitForm(): void {
    if (this.characterForm.invalid) {
      this.characterForm.markAllAsTouched();
      return;
    }
    console.log(this.characterForm.value);
    this.character.emit(this.characterForm.getRawValue());
    this.characterForm.reset();
  }

  get nameField(): FormControl<string> {
    return this.characterForm.controls.name;
  }

  get powerField(): FormControl<number> {
    return this.characterForm.controls.power;
  }
}
