import { Injectable, OnInit } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //This will be the intial values for our user
  //The any datatype allows the variable to be undefined 
  //Otherwise TS will complain and throw an error 
  User: any;
  constructor() {
    console.log(this.User);
    //this.User = { name: "Bobby", contact: "XxXtremePineappleXxX@email.com", bio: "Likes pineapples" };
  }

  getUser(): User {
    return this.User;
  }

  setUser(name: string, contact: string, bio: string): void {
    this.User.name = name;
    this.User.contact = contact;
    this.User.bio = bio;
    console.log(this.User);
  }
}