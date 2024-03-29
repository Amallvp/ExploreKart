import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productArray:any[],searchString:string,propName:string): any {
     
    const result:any=[]

    if(!productArray || !searchString || !propName){

      return productArray
    }
else{
  productArray.forEach((item:any)=>{

    if (item[propName].trim().toLowerCase().includes(searchString.trim().toLowerCase())) {         // oru stringinte akath sub string indonn nokan vendi use cheyynatha includes()      

      result.push(item)
    }  
  })

  return result
}



  }

}
