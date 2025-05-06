import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = "anas"
  constructor(){
    console.log("Constructor is working")
    this.name = 'Ali hamza'
  }

  ngOnInit(){
    console.log("ngOnInit")
    this.name  = "shan"
  }

  @Input() user:string=''
  @Input() city:string=''

}
