import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageMap } from '@ngx-pwa/local-storage';
import { PetFindService } from './pet-find.service';
import { map } from 'rxjs/operators';

const OAUTH_CLIENT = environment.OAUTH_CLIENT;
const OAUTH_SECRET = environment.OAUTH_SECRET;
const API_URL = environment.API_URL;
const BODY = new URLSearchParams()
const HEADERS = new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _http: HttpClient, private _storage: StorageMap) { }

  getToken() {
    this.addedParams();
    return this._http.post(API_URL + 'oauth2/token',
      BODY.toString(), { headers: HEADERS }).subscribe((data) => {
        this.saveTokenStorage(data)
      })
  }

  saveTokenStorage(token) {
    return this._storage.set('token', token).subscribe(res => res);
  }

  addedParams() {
    BODY.append('grant_type', 'client_credentials');
    BODY.append('client_id', OAUTH_CLIENT);
    BODY.append('client_secret', OAUTH_SECRET);
  }
  readTokenStorage():any{
    return this._storage.get('token');
  }

  clearToken(){
    return this._storage.delete('token').subscribe(() => {});
  }
}
