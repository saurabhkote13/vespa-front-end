import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookTestRideService {

  constructor(private http: HttpClient) { }

  public PostHttpData(data: any) {
    return this.http.post('https://reqres.in/api/users', data)
}

}
