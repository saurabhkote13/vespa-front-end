import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanLoad{
  canLoad() {
    return false;
  }

  constructor() { }
}
