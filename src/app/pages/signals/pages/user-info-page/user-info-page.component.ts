import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.scss',
})
export class UserInfoPageComponent {
  private _userService = inject(UsersService);
  userId = signal<number>(1);
  currentUser = signal<User | undefined>(undefined);
  userWasFound = signal<boolean>(false);

  loadUser(idUser: number) {
    if (!idUser) {
      return;
    }
    this.userId.set(idUser);
    this.currentUser.set(undefined);
    this._userService.getUserById$(idUser).subscribe(
      (user) => {
        this.userWasFound.set(true);
        this.currentUser.set(user);
      },
      (error) => {
        this.userWasFound.set(false);
      }
    );
  }
}
