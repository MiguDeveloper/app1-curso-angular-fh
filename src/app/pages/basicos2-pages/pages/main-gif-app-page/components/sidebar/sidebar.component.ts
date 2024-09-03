import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { GiftService } from '../../services/gift.service';
import { CommonModule, JsonPipe, TitleCasePipe } from '@angular/common';

interface ItemsSidebarTag {
  label: string;
  icon: string;
  command: () => void;
}
@Component({
  selector: 'gif-sidebar',
  standalone: true,
  imports: [MenuModule, JsonPipe, TitleCasePipe, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  private _gifServices = inject(GiftService);
  items: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this._gifServices.tagsHistory$.subscribe((tags) => {
      this.items = [
        {
          label: 'GifApp',
          items: tags.map((tag) => {
            return {
              label: tag,
              icon: 'pi pi-arrow-right',
              command: () => {
                this._gifServices.addTagToHistory(tag);
              },
            };
          }),
        },
      ];
    });
  }
}
