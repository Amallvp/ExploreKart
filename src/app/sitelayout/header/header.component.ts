import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/productsll/services/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchTerm:any=""

constructor(private ps:ProductserviceService){}

  search(event:any){
    this.searchTerm=event.target.value

    // console.log(this.searchTerm);

    // send data to behaviour subject object  , next() method is used send data 
    
    this.ps.search.next(this.searchTerm)
  }

}
