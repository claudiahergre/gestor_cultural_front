import { inject } from '@angular/core';
import { Router } from '@angular/router';

const LoginGuard = () => {
  const router = inject(Router);
  if (localStorage.getItem('token_front')) {
    return true;
  } else {
    router.navigate(['/loginStaff']);
    return false;
  }
};

const LoginGuardUsuario = () => {
  const router = inject(Router);
  if (localStorage.getItem('token_front')) {
    return true;
  } else {
    router.navigate(['/usuarios', 'login']);
    return false;
  }
};

export { LoginGuard, LoginGuardUsuario };
