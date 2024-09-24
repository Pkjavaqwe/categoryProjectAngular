import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../custommodelclasses/category';
import { Customvalidators } from '../custommodelclasses/customvalidators';
import { ActivatedRoute } from '@angular/router';
import { CategorycrudService } from '../services/categorycrud.service';

@Component({
  selector: 'app-catergoryinput',
  templateUrl: './catergoryinput.component.html',
  styleUrl: './catergoryinput.component.css'

})
export class CatergoryinputComponent {
  categoryForm:FormGroup
  category= new Category()
  routeUrl:string|undefined = "";
  constructor(private extractParams : ActivatedRoute, private categoryCrud:CategorycrudService){

    this.routeUrl=extractParams.snapshot.routeConfig?.path
   const extractedCategoryId=extractParams.snapshot.paramMap.get('categoryId')
   if(extractedCategoryId!=null){
       const catId = parseInt(extractedCategoryId)
       console.log(catId);
       this.getCategoryById(catId)
       
   }

   this.categoryForm=new FormGroup(
     {
     categoryId:new FormControl(this.category.categoryId,[Validators.required,Validators.min(3)]),
     categoryName:new FormControl(this.category.categoryName,[Validators.required, Validators.pattern('[A-Za-z ]*')]),
     categoryStock:new FormControl(this.category.categoryStock,[Validators.required]),
     numberOfProducts:new FormControl(this.category.numberOfProducts,[Validators.required,Validators.max(3)]),
     dateCteated:new FormControl(this.category.dateCteated,Validators.required),
     categoryImag:new FormControl(),
     },[Customvalidators.categoryIdMust("categoryStock","categoryId")]
   )
  }

  
  get categoryStock(){
    return this.categoryForm.get('categoryStock')
  }
  
  
  get categoryName(){
    return this.categoryForm.get('categoryName')
  }
  get numberOfProduct(){
    return this.categoryForm.get('numberOfProduct')
  }
  
  get dateCteated(){
    return this.categoryForm.get('dateCteated')
  }

  get categoryId(){
    return this.categoryForm.get('categoryId')
  }
  
  collectCategoryData(){
    this.category=this.categoryForm.value
    console.log(this.categoryForm);
    if(this.routeUrl?.includes('addcategory')){
      this.addCategory()
    }
    else if(this.routeUrl?.includes('editcategory')){
      this.updateCategory()
    }
    
  }

  addCategory(){
   const obsAdd= this.categoryCrud.callAddCategory(this.category)
   console.log(obsAdd)
   obsAdd.subscribe({
    next:(nextValues)=>console.log(nextValues),
    error:(err)=>console.log(err)
   })
      // obsAdd.subscribe({
      //   next:(responseCat)=>{console.log(responseCat);
      //     window.alert(`Employee with id ${responseCat.categoryId} is added successfully`)},
      //   error:(err)=>console.log(err)
        
      // })
  }
  getCategoryById(categoryId:number){
    const oneCatById=this.categoryCrud.callGetOndeById(categoryId)
    oneCatById.subscribe({
      next:(cat)=>{
        console.log(cat);
        console.log(cat.numberOfProducts);
        let dc=cat.dateCteated
        console.log("date created",cat.dateCteated);

        cat.dateCteated=dc.slice(0, dc.length-5)
        this.categoryForm.patchValue(cat)
        
      },
      error:(err=>{
        console.log(err);
        window.alert("something went wrong while fetchi one employee")
        
      })
    })
  }
  updateCategory(){
    const obsUpdate = this.categoryCrud.callUpdate(this.category)
    obsUpdate.subscribe({
     next:(obj)=>{
       console.log(obj);
       window.alert(`Category with id ${this.category.categoryId} updated successfully....`)
      //  this.router.navigate(['home/employeee']);
     },
     error: (err)=>{
       console.log(err); 
       window.alert("something went wrong while updating...")
     }
    })
  }
  testError(){
    console.log(this.categoryName?.errors);

  }
}
