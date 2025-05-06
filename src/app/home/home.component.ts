import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ProfileComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){

  }
  // goToProfile(){
  //   this.router.navigate(['profile'],{queryParams : {name:"muhammad anas"}})
  // }


  users = [
    {
      id : 1,
      name : "muhammad anas",
      age : 12,
      email : "muhammad@gmail.com"
    },
    {
      id : 2,
      name : "mehbood",
      age : 23,
      email : "mehbood@gmail.com"
    },
    {
      id : 3,
      name : "shan",
      age : 22,
      email : "shan@gmail.com" 
    },
    {
      id : 4,
      name : "hammad",
      age : 24,
      email : "hammad@gmail.com"
    }
  ]
}
