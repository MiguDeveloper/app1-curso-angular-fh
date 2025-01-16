import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth.interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('isAuthenticatedGuard', authService.authStatus());
  if (authService.authStatus() === AuthStatus.Authenticated) {
    return true;
  }
  router.navigate(['/auth/login']);
  return false;
};
