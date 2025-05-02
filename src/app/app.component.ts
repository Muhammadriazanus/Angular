import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent, ProfileComponent],
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

  handleEvent(event: any) {
    console.log("function called", event.type)
    console.log("function called", event.target)
    console.log("function called", event.target.name)
    console.log("value", (event.target as HTMLInputElement).value)
  }
  name = ""
  getName(event: Event) {
    // const name = ""
    // console.log('value',(event.target as HTMLInputElement).value);
    const val = (event.target as HTMLInputElement).value
    this.name = val
  }
  dispalyName = ""
  showName() {
    this.dispalyName = this.name
  }
  setName() {
    this.name = "anas"
  }
  email = ""
  toggle = true
  getEmail(value: string) {

    this.email = value
    console.log(value)
    if (!value.includes("@")) {
      alert("please enter valid Email")
    }
  }
  display = false
  hide() {
    this.display = true
  }
  toggle1() {
    this.display = !this.display
  }
  togglehandler() {
    this.toggle = !this.toggle
    console.log("🚀 ~ AppComponent ~ toggle ~ this.display:", this.toggle)
  }
  color = 3

  handleColor(val: number) {
    this.color = val
  }
  handleInputColor(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value)
  }
  // switch statement 
  colordescribe = 'green'
  colordescribeHandler(val: string) {
    this.colordescribe = val
  }
  users = ["Anas", "Muhammad", "Hamza", "shan", "noman", "ali"]
  students = [
    { name: "muhammad", age: 20, email: "muhammad12132@gmail.com" },
    { name: "anas", age: 23, email: "Anas4453@gmail.com" },
    { name: "ali", age: 20, email: "ali@gmail.com" },
    { name: "shan", age: 12, email: "shan@gmail.com" },
  ]
  getFullName(name: string) {
    console.log(name);

  }
  // signals 
  count1 = signal(10)


  x = 20
  // constructor() {
  //   effect(() => {
  //     console.log(this.count1());

  //   })
  // }
  updatedvalue(val: string) {
    if (val === 'inc') {
      this.count1.set(this.count1() + 1)
    } else {
      this.count1.set(this.count1() - 1)
    }
  }
  // signal data type

  data : WritableSignal<number | string> = signal(10)  // <number | string define the value of signals >

  updateTheSignal (){
    this.data.set("hello")
  }


  // computed signals

  z = signal(20)
  y = signal(10)
  a = computed(()=> this.z() + this.y())
  showvalue(){
    this.z.set(100)
    console.log(this.z())
  }
  userName = signal("muhammad anas")
  constructor(){
    effect(()=>{
      console.log(this.userName())
    })
  }
  // updateUserName(){

  // }

  counting = signal(0)
  dispalyHeading = false
  dispalyheadingtoggle(){
    this.dispalyHeading =! this.dispalyHeading
  }



// for loop contextual varible
// count 
// index
// last
// first
// odd and even
// empty block for loop 
user12 = ["muhammad","anas","Muhammad" ,"riaz" ,"ali", "khan" , "zahid",'shan']


 
}
