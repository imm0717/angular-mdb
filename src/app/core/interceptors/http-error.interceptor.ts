import { catchError } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        return next.handle(req).pipe(
            catchError(error => {
                console.log('Error: ', error)
                return throwError(error);
            })
        );

    }
}