import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {
  constructor(private loginService:LoginService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let jwt = this.loginService.getToken()
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwt}`
      }
    });
    return next.handle(request);
  }

}
