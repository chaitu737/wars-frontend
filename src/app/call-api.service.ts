import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  domain = 'http://localhost:3000/api/wars';



  constructor(private _http: HttpClient) {}


  searchLocation(filter){
    return this._http.get( this.domain+ `/search-location?location=${filter}`)

  }
  getwarInfo(data){
    return this._http.post( this.domain+ '/war-info', data);

  }
}
