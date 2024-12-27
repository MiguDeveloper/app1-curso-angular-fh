import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { filter } from 'rxjs';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent implements OnInit {
  private _userService = inject(UsersService);
  users: User[] = [];
  currentPage = 1;

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number): void {
    this._userService
      .getsUsers$(page)
      .pipe(filter((users: User[]) => users.length > 0))
      .subscribe((users: User[]) => {
        this.currentPage = page;
        this.users = users;
      });
  }
}
