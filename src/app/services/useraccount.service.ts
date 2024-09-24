import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor() { }
  
  loginSuccessFlag=false
  login(username: string,password:string){
    if(username==="admin" && password==="admin@123"){
      this.loginSuccessFlag=true
    }
    return this.loginSuccessFlag
  }

  logout(){
    this.loginSuccessFlag=false
  }

}
