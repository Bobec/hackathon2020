import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private router : Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

        const token = localStorage.getItem('token');    
        console.log(token);
        if (token) {
            console.log(window.location.pathname);
            
        }
        else {
            if(!window.location.pathname.includes("login")) {
                this.router.navigate(['login']);
            }
        }
        
        

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request);
    }
}