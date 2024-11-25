import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { interval, last, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-pipe-angular-page',
  standalone: true,
  imports: [
    CardModule,
    PanelModule,
    TableModule,
    FieldsetModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './pipe-angular-page.component.html',
  styleUrl: './pipe-angular-page.component.scss',
})
export class PipeAngularPageComponent {
  nameLower: string = 'jose';
  nameUpper: string = 'JOSE';
  fullName: string = 'JosE eSpInOzA';
  customDate: Date = new Date();
  formatsPipes: string[] = [
    '',
    'full',
    'short',
    'long',
    'MMMM',
    'MMMM dd, yyyy',
  ];
  name = 'Miguel';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  clientes = ['Miguel', 'Jose', 'Victor', 'Carlos', 'Pedro'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  person = {
    name: 'Miguel',
    lastname: 'Chinchay',
    age: 24,
    ocupation: 'Developer',
  };
  myObservable: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('value', value))
  );
  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Llego la data del servicio');
    }, 3000);
  });
  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  popClients() {
    this.clientes.pop();
  }
}
