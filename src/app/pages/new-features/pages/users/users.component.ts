import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TitleComponent } from '../../components/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  public userServices = inject(UsersService);
  constructor() {
    this.userServices.getUsers$().subscribe();
  }
}
