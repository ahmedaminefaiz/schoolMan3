import { Injectable } from '@angular/core';
import { Profile } from './Profile';


@Injectable({
  providedIn: 'root'
})
export class Ser1Service {
  Profile:Profile[]=[];
  constructor() {
    this.Profile.push(new Profile(1,"ahmed",20));
    this.Profile.push(new Profile(2,"amine",20));
    this.Profile.push(new Profile(3,"smail",20));
    this.Profile.push(new Profile(4,"islame",20));
    this.Profile.push(new Profile(5,"hakim",20));
  }
  getProfile(){
    return this.Profile;
  }
}
