import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UseraccountService } from '../services/useraccount.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { setUser } from '../ngrx/user.action';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
 
  admin={
    username:'admin',
    password:'admin@123'
  }
  constructor(private store :Store<{user:string}>,private account:UseraccountService ,private router:Router, private cookie:CookieService){
      
  }
   errormessage=""
  flag =false
  sendLoginData(loginData:any){

    console.log(loginData)
    this.admin=loginData.value
    
    console.log(this.admin);
    
    this.flag = this.account.login(this.admin.username,this.admin.password)

    if(this.flag){
      window.alert("loggeg in successfully")
            
      this.cookie.set("user", this.admin.username,1)
      this.store.dispatch(setUser(this.cookie.get('user'))) 
      this.router.navigate(["home"])
            
           }else{
            this.errormessage = "Invalid credentials"
    }
    


  }
 
  
}
