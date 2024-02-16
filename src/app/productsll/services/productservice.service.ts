import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  //service fileil venam behaviour effect create cheyyande ennale ella componentinum access cheyyan pattu


// search enna oru object crete cheyythe vechu ennale search stringile value enghott veru

  search=new BehaviorSubject("")

  constructor(private http: HttpClient) { }

  // Api call to get all products 

  getAllProducts() {

    return this.http.get('http://localhost:3001/product')
  }

  // get single product api
  
getProducts(id:any){
 return this.http.get('http://localhost:3001/product/'+id)
}


// add new productinte api call

addProduct(pdata:any){

  return this.http.post('http://localhost:3001/product',pdata)
}

deleteProduct(id:any){
  return this.http.delete('http://localhost:3001/product/'+id)
}


//edit product

editproduct(id:any,pdata:any){

  return this.http.put('http://localhost:3001/product/'+id,pdata)
}

}

