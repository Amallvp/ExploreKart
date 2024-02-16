import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductserviceService } from '../services/productservice.service';




@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  pid:any             // pid = productid
pdata:any={}
loading:any=true

  constructor(private ar:ActivatedRoute, private ps:ProductserviceService , private rout:Router){ }

  ngOnInit(): void{


setTimeout(()=>{
  this.loading=false
},2000)



    this.ar.params.subscribe((data:any)=>{
      console.log(data);
       this.pid=data.id
      console.log(this.pid); 
    })
    

    this.ps.getProducts(this.pid).subscribe((data:any)=>{
      // console.log(data);
      this.pdata=data
      console.log(this.pdata);
      
    })

   
 }
  
deleteProduct(){

  this.ps.deleteProduct(this.pid).subscribe((result:any)=>{
alert('Product Deleted')
    this.rout.navigateByUrl("")
  })
}
  
}
  

  

  

 


