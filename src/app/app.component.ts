import { Component, computed, effect, model, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { single } from 'rxjs';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf,NgStyle,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // count = 0
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
  // handleCount(val: string) {
  //   if (val === 'minus') {
  //     this.count = this.count - 1;
  //   } else if (val === 'plus') {
  //     this.count = this.count + 1;
  //   } else {
  //     this.count = 0;
  //   }
  // }

  // handleEvent(event: any) {
  //   console.log("function called", event.type)
  //   console.log("function called", event.target)
  //   console.log("function called", event.target.name)
  //   console.log("value", (event.target as HTMLInputElement).value)
  // }
  // name = ""
  // getName(event: Event) {
  //   // const name = ""
  //   // console.log('value',(event.target as HTMLInputElement).value);
  //   const val = (event.target as HTMLInputElement).value
  //   this.name = val
  // }
  // dispalyName = ""
  // showName() {
  //   this.dispalyName = this.name
  // }
  // setName() {
  //   this.name = "anas"
  // }
  // email = ""
  // toggle = true
  // getEmail(value: string) {

  //   this.email = value
  //   console.log(value)
  //   if (!value.includes("@")) {
  //     alert("please enter valid Email")
  //   }
  // }
  // display = false
  // hide() {
  //   this.display = true
  // }
  // toggle1() {
  //   this.display = !this.display
  // }
  // togglehandler() {
  //   this.toggle = !this.toggle
  //   console.log("🚀 ~ AppComponent ~ toggle ~ this.display:", this.toggle)
  // }
  // color = 3

  // handleColor(val: number) {
  //   this.color = val
  // }
  // handleInputColor(event: Event) {
  //   this.color = parseInt((event.target as HTMLInputElement).value)
  // }
  // switch statement 
  // colordescribe = 'green'
  // colordescribeHandler(val: string) {
  //   this.colordescribe = val
  // }
  // users = ["Anas", "Muhammad", "Hamza", "shan", "noman", "ali"]
  // students = [
  //   { name: "muhammad", age: 20, email: "muhammad12132@gmail.com" },
  //   { name: "anas", age: 23, email: "Anas4453@gmail.com" },
  //   { name: "ali", age: 20, email: "ali@gmail.com" },
  //   { name: "shan", age: 12, email: "shan@gmail.com" },
  // ]
  // getFullName(name: string) {
  //   console.log(name);

  // }
  // signals 
  // count1 = signal(10)


  // x = 20
  // constructor() {
  //   effect(() => {
  //     console.log(this.count1());

  //   })
  // }
  // updatedvalue(val: string) {
  //   if (val === 'inc') {
  //     this.count1.set(this.count1() + 1)
  //   } else {
  //     this.count1.set(this.count1() - 1)
  //   }
  // }
  // signal data type

  // data : WritableSignal<number | string> = signal(10)  // <number | string define the value of signals >

  // updateTheSignal (){
  //   this.data.set("hello")
  // }


  // computed signals

  // z = signal(20)
  // y = signal(10)
  // a = computed(()=> this.z() + this.y())
  // showvalue(){
  //   this.z.set(100)
  //   console.log(this.z())
  // }
  // userName = signal("muhammad anas")
  // constructor(){
  //   effect(()=>{
  //     console.log(this.userName())
  //   })
  // }
  // updateUserName(){

  // }

  // counting = signal(0)
  // dispalyHeading = false
  // dispalyheadingtoggle(){
  //   this.dispalyHeading =! this.dispalyHeading
  // }



// for loop contextual varible
// count 
// index
// last
// first
// odd and even
// empty block for loop 
// user12 = ["muhammad","anas","Muhammad" ,"riaz" ,"ali", "khan" , "zahid",'shan']
// two way data binding
// name1 = "anas"
// counts = model<number>(0)
// updateCounts(amount:number):void {
//   this.counts.update(curr=> curr + amount)
// }

// task = ""
// taskList:{id:number,task:string}[]=[]

// addTask(){
//   this.taskList.push({id : this.taskList.length+1,task:this.task})
//   this.task = ""
//   console.log(this.taskList)
// }
// deletetask(taskId : number){
//   this.taskList = this.taskList.filter(item=> item.id != taskId)
//   console.log("🚀 ~ AppComponent ~ deletetask ~ this.taskList:", this.taskList)
// }
// editTask(taskId : number){
//   const editTask = this.taskList.find(item=> item.id === taskId)
//   if(editTask){
//     this.task = editTask.task 
//   }


// }
// show = false
// member = ["khan","anas","ali","muhammad"]
// studentsData = [
//   {
//     name : "Anas",
//     age : 21,
//     emial : "riazanus568@gmail.com"
//   },
//   {
//     name : "Muhammad",
//     age : 31,
//     emial : "Muhammad1213@gmail.com"
//   },
//   {
//     name : "Ali",
//     age : 12,
//     email : "Ali1213@gmail.com"
//   }
// ]
// login = true
// handleUserAuth(){
//   this.login =! this.login
// }
// block = 0
// updateTheBlock(){
//   this.block++
// }

// name = new FormControl('anas')
// password = new FormControl('1213')
// handlesubmit(){
//   console.log(this.name.value,this.password.value);
  
// }
profileForm = new FormGroup({
  name: new FormControl('', [
    Validators.required
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]),
  email: new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
  ])
});

onSubmit() {
  if (this.profileForm.valid) {
    console.log('Form Submitted:', this.profileForm.value);
  } else {
    console.log('Form is invalid');
    this.profileForm.markAllAsTouched(); // Highlight all errors
  }
}

get name() {
  return this.profileForm.get('name');
}

get password() {
  return this.profileForm.get('password');
}

get email() {
  return this.profileForm.get('email');
}
openModal(){
  const model = document.getElementById("myModal")
  console.log("🚀 ~ AppComponent ~ openModal ~ model:", model)
  if(model != null){
    model.style.display = 'block'
  }
}
userName = 'anas'
onUserChange (user:string){
  this.userName = user
}
users = ['Anas','Muhammad','Riaz','bruce','peter','shan']
}
