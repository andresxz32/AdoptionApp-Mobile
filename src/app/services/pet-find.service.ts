import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { filter, map, tap } from 'rxjs/operators';


const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class PetFindService {
  constructor(private _http: HttpClient, private _token: TokenService) { }

  getDogs(page) {
    return this._http.get(`${API_URL}animals?type=dog&page=${page}`)
      .pipe(map(response => response['animals']
        .filter(item => item.primary_photo_cropped != null)));
  }
}
