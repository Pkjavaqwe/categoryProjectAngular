import { AbstractControl, ValidatorFn } from "@angular/forms";

export class Customvalidators {
   static categoryIdMust(string1:string,string2:string):ValidatorFn {
    return (control:AbstractControl)=>{
        const value1=control.get(string1)?.value;
        const value2=control.get(string2)?.value
        console.log("values",value1,value2);
        console.log("valuestype",typeof value1, typeof value2);
        
        
        if(!value1.includes(value2)){
          console.log("in if statement");
          
        return {valuematch:true}
        }
        else{
          return null
          
        }
    }
    }
}
