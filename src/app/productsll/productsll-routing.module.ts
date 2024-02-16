import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsllComponent } from './productsll.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', component: AllproductsComponent },
  { path: "view/:id", component: ViewComponent },
  { path: "add", component: AddComponent },
  { path: "edit/:id", component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsllRoutingModule { }
