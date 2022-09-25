import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any>{
    return this.http.get(`https://restcountries.com/v3.1/all`)
  }

  getPaisByName(name:string)
  { 
    var url = "`https://restcountries.com/v3.1/name/${name}`";
    console.log(url);
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }
}
