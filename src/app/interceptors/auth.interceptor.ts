import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let clonedRequest = request;

    //TODO setItem token_front en el Login de staff y usuarios
    if (localStorage.getItem('token_front')) {
      clonedRequest = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token_front')!,
        },
      });
    }
    return next.handle(clonedRequest);
  }
}
