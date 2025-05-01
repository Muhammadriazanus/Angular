import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignupComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0
  // name:string = "Anas"
  // data:string| number = "hello"
  // other:string | boolean  = true
  // updatedName (){
  //   this.name="muhammad"
  //   this.data = "122"
  //   this.other = false
  // }
  // sum (a:number,b:number){
  //   console.log(a+b)
  // }
  // handleIncrement(){
  //   this.count = this.count+1
  // }
  // handleDecrement(){
  //   this.count = this.count-1
  // }
  // handleReset(){
  //   this.count = 0
  // }
  // title = 'learning';
  // name = "anas"
  // handleClickEvent (){
  //   // alert("function call")
  //   console.log("Function called ");
  //   this.otherFunction()
    
  // }a
  // otherFunction(){
  //   console.log("Hello other Function ");
    
  // }
  handleCount(val: string) {
    if (val === 'minus') {
      this.count = this.count - 1;
    } else if (val === 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  handleEvent(event:any){
    console.log("function called",event.type)
    console.log("function called",event.target)
    console.log("function called",event.target.name)
    console.log("value",(event.target as HTMLInputElement).value)
  }
  name=""
  getName(event:Event){
    // const name = ""
    // console.log('value',(event.target as HTMLInputElement).value);
    const val = (event.target as HTMLInputElement).value
    this.name = val
  }
  dispalyName = ""
  showName(){
    this.dispalyName = this.name
  }
  setName (){
    this.name = "anas"
  }
  email = ""
  toggle = true
  getEmail (value:string){
    
    this.email = value
    console.log(value)
    if(!value.includes("@")){
      alert("please enter valid Email")
    }
  }
  display = false
  hide(){
    this.display = true
  }
  toggle1(){
    this.display =!this.display
  }
  togglehandler (){
    this.toggle =! this.toggle
    console.log("🚀 ~ AppComponent ~ toggle ~ this.display:", this.toggle)
  }
}
