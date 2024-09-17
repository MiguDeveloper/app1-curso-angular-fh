import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[mch-msgValidationField]',
  standalone: true,
})
export class MsgValidationFieldDirective {
  private _htmlElement?: ElementRef<HTMLElement>;
  private _errors?: ValidationErrors | null;
  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }
  constructor(private element: ElementRef<HTMLElement>) {
    this._htmlElement = element;
  }

  setErrorMessage() {
    if (!this._htmlElement) {
      return;
    }
    if (!this._errors) {
      this._htmlElement.nativeElement.innerText = '';
      return;
    }
    const keys = Object.keys(this._errors);

    if (keys.includes('required')) {
      console.log(this._errors);
      this._htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if (keys.includes('minlength')) {
      const minlength = this._errors['minlength']['requiredLength'];
      this._htmlElement.nativeElement.innerText = `Este campo debe tener al menos ${minlength} caracteres`;
      return;
    }

    if (keys.includes('maxlength')) {
      const maxlength = this._errors['maxlength']['requiredLength'];
      this._htmlElement.nativeElement.innerText = `Este campo debe tener menos de ${maxlength} caracteres`;
      return;
    }

    if (keys.includes('email')) {
      this._htmlElement.nativeElement.innerText =
        'Este campo debe ser un correo electrónico';
      return;
    }
  }
}
