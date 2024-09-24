import { Component } from '@angular/core';
import { CategorycrudService } from '../services/categorycrud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css'
})
export class FileuploadComponent {
 
 categoryId=0;
 categoryImage:any
 constructor(private activeRoute:ActivatedRoute,private empCrud:CategorycrudService){
  const routeParam = activeRoute.snapshot.paramMap.get("categoryId")
  if (routeParam!=null) {
    this.categoryId =parseInt(routeParam)
   
  }
}

getFile(ev:any){
  console.log(ev)
  console.log(ev.target.files[0]);
  this.categoryImage=ev.target.files[0]
}

upload(){
  console.log(this.categoryImage);
  
  if(this.categoryImage!=null){
    this.empCrud.uploadCategoryPic(this.categoryId,this.categoryImage)
  }
}

}
