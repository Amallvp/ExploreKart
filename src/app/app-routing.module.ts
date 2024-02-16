import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'productsll', loadChildren: () => import('./productsll/productsll.module').then(m => m.ProductsllModule) },
{path:"" , redirectTo:'productsll',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
