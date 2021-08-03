import { Injectable } from '@angular/core';
import { Login } from '../../model/login.interface';
import { Response } from '../../model/responce.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  /* variable globales */

  url : any = environment.url

  httpOptions = {
    headers: new HttpHeaders({'Type-content':  'aplication/json'})
  };

  /* metodo para loguearse */
  loginByEmail(json:Login):Observable<Response> {
    let direccionUrl = this.url + 'login'
    return this.http.post<Response>(direccionUrl,json)
  }
}
