import { Router } from "@angular/router";
import { UseraccountService } from "../services/useraccount.service";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

export function authGuards(): boolean{
    const accountt = inject(UseraccountService)
    const router = inject(Router)
    const cookie=inject(CookieService)
    const username=cookie.get('user');
    if(username!="")
        return true;
    else{
        window.alert("please login to proceed for crud operation.")
      
        router.navigate(['login'])
        return false;
    }
    // if (accountt.loginSuccessFlag) {
    //     return true
    // } else {
    //     window.alert("")
    //     router.navigate(['login'])
    //     return false
    // }
}