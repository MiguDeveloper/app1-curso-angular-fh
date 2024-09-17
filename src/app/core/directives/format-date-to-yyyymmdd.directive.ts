import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[mch-FormatDateToYYYYMMDD]',
  standalone: true,
})
export class FormatDateToYYYYMMDDDirective {
  element: ElementRef<HTMLInputElement> = inject(ElementRef);
  constructor() {}

  private _formatDateToYYYYMMDD(date: Date): string {
    return date.toLocaleDateString('es-ES', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event: any) {
    if (Array.isArray(event) && event.length === 2 && !event.includes(null)) {
      const [startDate, endDate] = event;
      const startDateFormatted = this._formatDateToYYYYMMDD(startDate);
      const endDateFormatted = this._formatDateToYYYYMMDD(endDate);
      console.log(startDateFormatted, endDateFormatted);
      this.element.nativeElement.value = `${startDateFormatted} - ${endDateFormatted}`;
    }
  }
}
