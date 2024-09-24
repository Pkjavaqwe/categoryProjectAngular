import { Injectable } from '@angular/core';
import { Category } from '../custommodelclasses/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorycrudService {

   baseUrl = "http://localhost:8080/categories"
  constructor(private http:HttpClient) { }

  callAddCategory(category:Category):Observable<Category>{
    // categories/add
    return this.http.post<Category>(this.baseUrl+"/add",category)
  }
  callgetAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"/getall")
  }
  callDleteCategoryById(categoryId:number):Observable<Object>{
    return this.http.delete<Object>(this.baseUrl+"/delete/"+categoryId)      
  }
  callGetOndeById(categoryId:number):Observable<Category>{
    return this.http.get<Category>(this.baseUrl+"/get/"+categoryId)
  }
  callUpdate(category:Category):Observable<Object>{
    return this.http.put<Object>(this.baseUrl+"/update/"+category.categoryId,category)
  }
  callGetCategoriesByName(catName:string):Observable<Category[]>{
    console.log(" in callGetCategoriesByName ");
    
    return this.http.get<Category[]>(this.baseUrl+'/getByName/'+catName)
  }
  uploadCategoryPic(categoryId:number,categoryImage:any) :Observable<Object>{
    console.log("in uploadCategorypic call to backend put for upload request--------category crudService");
    
    let formData= new FormData()
    formData.append("categoryImage",categoryImage)
    const result = this.http.put<Object>(this.baseUrl+'/fileupload/'+categoryId,formData)
    console.log("result",result);
    result.subscribe({
      next:(obj)=>{
        console.log(obj)
      },
      error:(err)=>console.log(err)
      
    })
    return result
   }
}
