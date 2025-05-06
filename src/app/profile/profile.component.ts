import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private  route:ActivatedRoute){
  
}
userName : string | null = ""
ngOnInit(){
  this.route.queryParams.subscribe(params=> {
    this.userName = params['name']
    
  })
}
}
