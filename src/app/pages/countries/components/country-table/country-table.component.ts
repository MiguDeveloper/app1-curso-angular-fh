import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { TableModule } from 'primeng/table';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { NestedPropertyPipe } from '@core/pipe/nested-property.pipe';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { RouterLink } from '@angular/router';

interface Column {
  field: string;
  img?: boolean;
  header: string;
}
@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [TableModule, MessagesModule, RouterLink, DecimalPipe],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss',
})
export class CountryTableComponent implements OnInit {
  cols: Column[] = [
    { field: 'flag', header: 'Icon' },
    { field: 'flags.svg', img: true, header: 'Bandera' },
    { field: 'name.common', header: 'Nombre' },
    { field: 'capital', header: 'Capital' },
    { field: 'population', header: 'Population' },
  ];
  @Input() countries: Country[] = [];
  messages: Message[] = [];

  ngOnInit(): void {
    this.messages = [{ severity: 'warn', detail: 'No hay elementos' }];
  }
}
