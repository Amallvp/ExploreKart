import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductserviceService } from '../services/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  // reactive form model create cheyyam ,  ith create cheyyune databasilek new product add cheyyan vendi aan

  addForm=this.fb.group({

    id:[''],
    Name:[''],
      CategoryId:[''],
      Description:[''],
      Price:[''],
      ProductImages:[''],
      Rating:[''],
      Review:[''],
      VendorName:[''],
      Warranty:[''],
  })

  constructor(private fb:FormBuilder , private ps:ProductserviceService ,private rout:Router) {}

  addProduct(){

    let path=this.addForm.value

    var newProduct={

      id:path.id,
    Name:path.Name,
      CategoryId:path.CategoryId,
      Description:path.Description,
      Price:path.Price,
      ProductImages:path.ProductImages,
      Rating:path.Rating,
      Review:path.Review,
      VendorName:path.VendorName,
      Warranty:path.Warranty,

    }
this.ps.addProduct(newProduct).subscribe((result:any)=>{

  alert('New product added')

  this.addForm.reset()    //  ith kodkkne new products details kodth add click cheyyumbo appathane page rset aavan

  // this.rout.navigateByUrl("")

})
   
  }

}
