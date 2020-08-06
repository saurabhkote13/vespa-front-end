import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BatrService {

  constructor(private http:HttpClient) { }
  public PostData(data:any)
  {
    return this.http.post("http://localhost:8082/api/vespatest/create",data)
  }
}
