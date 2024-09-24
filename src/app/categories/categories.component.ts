import { Component, Input } from '@angular/core';
import { Category } from '../custommodelclasses/category';
import { CategorycrudService } from '../services/categorycrud.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
       @Input()
       bgcolor="red";
       
    constructor(private categoryCrud : CategorycrudService){
    }

       categories:Category[]=[]
       allCategories:Category[]=[]

       static getDateTimeLocal(d:Date){
        return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }

    ngOnInit():void{
      this.getAllCategories()
    }

    getAllCategories(){
         const categoryObs = this.categoryCrud.callgetAllCategories()
         categoryObs.subscribe({
          next:(cat)=>{console.log(cat);
            this.categories=cat
            this.allCategories=cat
          },
          error:(err)=>{
            console.log(err);
            window.alert("something went erong getting categories")        
          }
         })
    }
    deleteCategoryById(categoryId:number){
      const deleteObs = this.categoryCrud.callDleteCategoryById(categoryId)
      console.log(deleteObs);
      
      deleteObs.subscribe({
        next:(responseData)=>{console.log("responsedata",responseData)
          window.alert("Category deleted successfully")
          this.getAllCategories()
        },
        error:(err)=>{
          console.log(err);
          window.alert("something went wrong deleting category...")   
        }
      })
    }
    searchCategory(catName: string){

      // const nameObs = this.categoryCrud.callGetCategoriesByName(catName)
      // console.log(nameObs);
      
      if(catName!==""){
        const nameObs = this.categoryCrud.callGetCategoriesByName(catName)
        console.log("search",nameObs)
        nameObs.subscribe({
          next:(cats)=>{
            if(cats.length>0){
            console.log(cats);
                   this.categories=cats
            }
            else{
            console.log("Not Found");
            }
          },
          error: (err)=>{
            console.log(err); 
            window.alert("something went wrong searching categories...")
          }
        })
      }else{
        this.categories=this.allCategories
      }
          
    }
}
