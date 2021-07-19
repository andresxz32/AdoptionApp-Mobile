import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
    constructor(private _token: TokenService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url == 'https://api.petfinder.com/v2/oauth2/token') {
            return next.handle(req);
        } else {
            return this._token.readTokenStorage().pipe(mergeMap((token:any) => {
                const newReq = req.clone({
                    setHeaders: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token.access_token}`
                    },
                });
                return next.handle(newReq);

            }))
        }

    }
}

