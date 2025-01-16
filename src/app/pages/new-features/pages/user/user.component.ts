import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { UserNewFeatures } from '../../interfaces/users.interfaces';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  private _route = inject(ActivatedRoute);
  private _userService = inject(UsersService);
  // public user = signal<UserNewFeatures | undefined>(undefined);
  public user = toSignal<UserNewFeatures | undefined>(
    this._route.params.pipe(
      switchMap(({ id }) => this._userService.getUsersById$(id))
    )
  );
  public fullName = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    } else {
      return 'Información del usuario:';
    }
  });

  constructor() {
    this._route.params.subscribe((params) => console.log({ params }));
  }
}
