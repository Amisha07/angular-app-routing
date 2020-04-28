import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { ProductComponent } from './product.component';
import { ProductRoute }       from './product.route';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductItemComponent } from './component/product-item/product-item.component';


@NgModule({
  imports: [
    CommonModule,
    ProductRoute
   ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductItemComponent
  ]
})
export class ProductModule {}
