import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { resetUser, setUser } from '../ngrx/user.action';
import { UseraccountService } from '../services/useraccount.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:Observable<string>
  constructor(private store : Store<{user:string}>, private router:Router, private cookie:CookieService, public account : UseraccountService){
        //  this.username = cookie.get('user')
       
        store.dispatch(setUser(cookie.get('user'))) ;
        this.username = store.select("user")
      }


    logOut(){
      this.cookie.delete('user')
      // this.username=""
      this.store.dispatch(resetUser())
      this.account.loginSuccessFlag=false
      
      window.alert("loggedOutSuccessfully")
      this.router.navigate(['/login'])
    }
}
