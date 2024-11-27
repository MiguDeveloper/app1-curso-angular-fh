import { Component } from '@angular/core';
import { ToggleCasePipe } from '@core/pipe/toggle-case.pipe';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { SortByPipe } from '@core/pipe/sort-by.pipe';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-pipe-personalizados-page',
  standalone: true,
  imports: [
    CardModule,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    ToggleCasePipe,
    TableModule,
    CommonModule,
    SortByPipe,
  ],
  templateUrl: './pipe-personalizados-page.component.html',
  styleUrl: './pipe-personalizados-page.component.scss',
})
export class PipePersonalizadosPageComponent {
  isUpperCase = false;
  products: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      price: 65,
      category: 'Accessories',
      quantity: 24,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      price: 72,
      category: 'Accessories',
      quantity: 61,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      price: 79,
      category: 'Fitness',
      quantity: 2,
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      price: 29,
      category: 'Clothing',
      quantity: 25,
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      price: 15,
      category: 'Accessories',
      quantity: 73,
    },
    {
      id: '1005',
      code: 'av2231fwg',
      name: 'Brown Purse',
      description: 'Product Description',
      price: 120,
      category: 'Accessories',
      quantity: 0,
    },
    {
      id: '1006',
      code: 'bib36pfvm',
      name: 'Chakra Bracelet',
      description: 'Product Description',
      price: 32,
      category: 'Accessories',
      quantity: 5,
    },
    {
      id: '1007',
      code: 'mbvjkgip5',
      name: 'Galaxy Earrings',
      description: 'Product Description',
      price: 34,
      category: 'Accessories',
      quantity: 23,
    },
    {
      id: '1008',
      code: 'vbb124btr',
      name: 'Game Controller',
      description: 'Product Description',
      price: 99,
      category: 'Electronics',
      quantity: 2,
    },
    {
      id: '1009',
      code: 'cm230f032',
      name: 'Gaming Set',
      description: 'Product Description',
      price: 299,
      category: 'Electronics',
      quantity: 63,
    },
    {
      id: '1010',
      code: 'plb34234v',
      name: 'Gold Phone Case',
      description: 'Product Description',
      price: 24,
      category: 'Accessories',
      quantity: 0,
    },
  ];

  sortByProperty: keyof Product | '' = '';

  categoryMap = {
    Accessories: 'Accesorios',
    Clothing: 'Ropa',
    Fitness: 'Fitness',
    Electronics: 'Electrónicos',
  };

  toggleIsUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  onSortByPropertyChange(sortByProperty: keyof Product | '') {
    this.sortByProperty = sortByProperty;
  }
}
