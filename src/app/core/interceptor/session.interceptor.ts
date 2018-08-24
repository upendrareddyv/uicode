import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class SessionInterceptor implements HttpInterceptor {
    constructor(private route: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => {

        }, (error: any) => {
            if (error instanceof HttpErrorResponse) {
                if (error.status === 401) {
                    this.route.navigate(['pages/login']);
                }
            }
        });
    }

}
