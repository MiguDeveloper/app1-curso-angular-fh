import { Component, inject, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GiftSearchBoxComponent } from './components/gift-search-box/gift-search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GiftService } from './services/gift.service';
import { Gif } from './interfaces/gifs.interfaces';

@Component({
  selector: 'app-main-gif-app-page',
  standalone: true,
  imports: [SidebarComponent, GiftSearchBoxComponent, CardListComponent],
  templateUrl: './main-gif-app-page.component.html',
  styleUrl: './main-gif-app-page.component.scss',
})
export class MainGifAppPageComponent implements OnInit {
  private readonly _gifService = inject(GiftService);
  gifsList: Gif[] = [];

  ngOnInit(): void {
    this._gifService.gifsList$.subscribe((gifs) => {
      console.log(gifs);
      this.gifsList = gifs;
    });
  }
}
