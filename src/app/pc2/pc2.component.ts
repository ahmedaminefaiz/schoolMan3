import { Component } from '@angular/core';
import { Profile } from '../Profile';
import { Ser1Service } from '../ser1.service';


@Component({
  selector: 'app-pc2',
  templateUrl: './pc2.component.html',
  styleUrl: './pc2.component.css'
})
export class Pc2Component {
  profile: Profile[];
  products: any[] = [];
  ProfileService: any;
  constructor()
  {
    this.ProfileService=new Ser1Service();
    this.profile=this.ProfileService.getProfiles();
  }
}
