import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{

  allproducts:any=[]

// array to store filtered category products from all products 

  filterProducts:any=[]    

searchKey:any=""

  constructor(private ps:ProductserviceService){}

  ngOnInit():void{

    this.ps.getAllProducts().subscribe(data=>{

      this.allproducts=data
      console.log(this.allproducts);


      this.filterProducts=this.allproducts    // allproductsum landing paging veran vendiaan ee line kodkne . 
      
    })

    // subscribr behavious subject

    this.ps.search.subscribe((item:any)=>{
      console.log(item);

      this.searchKey=item
      
    })
   

  }

  filterCategory(catId:any){
   this.filterProducts= this.allproducts.filter((item:any)=>
      item.CategoryId==catId||catId=="")
  }

}
