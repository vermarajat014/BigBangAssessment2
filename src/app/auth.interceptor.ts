import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the authentication token from storage or state management
    const authToken = localStorage.getItem('token'); // Use `this` to call the function within the class

    // Clone the request and add the token to the headers
     request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });

    // Pass the modified request to the next interceptor or HttpHandler
    return next.handle(request);
  }

 
}
