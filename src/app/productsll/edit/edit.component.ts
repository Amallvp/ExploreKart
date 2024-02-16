import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  pid:any
  pdata:any={}

  constructor(private ar: ActivatedRoute , private ps:ProductserviceService ,private rout:Router) { }

  ngOnInit(): void {

    this.ar.params.subscribe((data: any) => {

      // console.log(data.id);

      this.pid=data.id

      this.ps.getProducts(this.pid).subscribe((result:any)=>{
        // console.log(result);

        this.pdata=result

        console.log(this.pdata);
        
        
      })

    })

    
  }

  // two way binding karanam update aaya editted data pdatayil thanne aayirikum vann kedakkunne , 
  // athond vedum access cheyyanda call cheyytha mathi

editData(){

  this.ps.editproduct(this.pid,this.pdata).subscribe((result:any)=>{
    alert("Product Data Updated")
this.rout.navigateByUrl("")
  })

}
  

}
