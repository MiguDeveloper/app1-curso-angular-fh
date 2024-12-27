import { Component, computed, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { filter } from 'rxjs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-users-signals-page',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './users-signals-page.component.html',
  styleUrl: './users-signals-page.component.scss',
})
export class UsersSignalsPageComponent {
  private _userService = inject(UsersService);
  users = signal<User[]>([]);
  currentPage = signal<number>(1);
  labelTotal = computed(() => `Total de usuarios: ${this.users().length}`);

  ngOnInit(): void {
    this.loadUsers(this.currentPage());
  }

  loadUsers(page: number): void {
    this._userService
      .getsUsers$(page)
      .pipe(filter((users: User[]) => users.length > 0))
      .subscribe((users: User[]) => {
        this.currentPage.set(page);
        // this.users.set(users);
        this.users.update((currentUsers) => [...currentUsers, ...users]);
      });
  }
}
