import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category } from '../custommodelclasses/category';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.css'
})

export class CategorycardComponent implements OnChanges {

   
   @Input()
   bgcolor=""
  cardBackground={}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['bgcolor']){
      this.cardBackground={backgroundColor: this.bgcolor}
    }
  }

 @Input()
 category = new Category()

@Output()
emitter = new EventEmitter<number>()

arrayBufferToBase64(buffer: ArrayBuffer): string {
 console.log("in conversion");
 
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  console.log("arrayBufferToBase64",window.btoa(binary))

  return window.btoa(binary);
}
}
