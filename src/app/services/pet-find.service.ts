import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';


const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class PetFindService {
  constructor(private _http: HttpClient, private _token: TokenService) { }

  getDogs() {
    return this._http.get(API_URL + 'animals?type=dog&page=2');
  }
}
