import { inject } from '@angular/core';
import { Router } from '@angular/router';

const LoginGuard = () => {
  const router = inject(Router);
  if (localStorage.getItem('token_front')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export { LoginGuard };
