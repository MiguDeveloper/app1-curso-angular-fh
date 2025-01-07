import { Component, computed, inject, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/pages/auth-page/services/auth.service';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [AvatarModule, SidebarModule, ButtonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  private readonly _authService = inject(AuthService);
  userLogged = computed(() => this._authService.currentUser());

  sidebarVisible = signal<boolean>(false);

  showSidebar() {
    console.log('showSidebar');
    this.sidebarVisible.set(true);
  }

  onLogout() {
    this._authService.logout();
  }
}
