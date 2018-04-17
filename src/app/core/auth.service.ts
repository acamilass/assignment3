import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public authState: any=null;

  constructor() { }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

}
