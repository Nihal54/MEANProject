import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor(private http : HttpClient) 
  { }

  getbatches()
  {
    return this.http.get("http://localhost:5100");
  }
}
