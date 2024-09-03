import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss',
})
export class LazyImageComponent implements OnInit {
  @Input() url!: string;
  @Input() alt = '';
  hasLoaded = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('URL property is required');
    }
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
