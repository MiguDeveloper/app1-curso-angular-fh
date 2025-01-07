export interface LoginResponse {
  user: User;
  token: string;
}

export interface CheckTokenResponse {
  user: User;
  token: string;
}

export interface User {
  _id: string;
  email: string;
  isActive: boolean;
  name: string;
  roles: string[];
}

export enum AuthStatus {
  checking = 'checking',
  Authenticated = 'Authenticated',
  NotAuthenticated = 'NotAuthenticated',
}
