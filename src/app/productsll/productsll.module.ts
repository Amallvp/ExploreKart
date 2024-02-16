import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsllRoutingModule } from './productsll-routing.module';
import { ProductsllComponent } from './productsll.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

import { AddComponent } from './add/add.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './productPipes/search.pipe';


@NgModule({
  declarations: [
    ProductsllComponent,
    AllproductsComponent,
    ViewComponent,
    EditComponent,
    AddComponent,
      SearchPipe
  ],
  imports: [
    CommonModule,
    ProductsllRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class ProductsllModule { }
