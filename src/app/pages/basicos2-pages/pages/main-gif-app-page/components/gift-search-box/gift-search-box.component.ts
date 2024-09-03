import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'gift-search-box',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './gift-search-box.component.html',
  styleUrl: './gift-search-box.component.scss',
})
export class GiftSearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;
  private _gifService = inject(GiftService);

  searchTag(): void {
    console.log(this.tagInput.nativeElement.value);
    const newTag = this.tagInput.nativeElement.value;
    this._gifService.addTagToHistory(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
