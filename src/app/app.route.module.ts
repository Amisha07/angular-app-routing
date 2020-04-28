import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { HelloComponent } from './hello.component';
import { ProductModule } from './product.module';

const appRoutes: Routes = [
    { path: '',  pathMatch: 'full', component: HomeComponent},
    { path: 'product', loadChildren: () => import( './product/product.module').then(m => m.ProductModule) },
    { path: 'hello', component: HelloComponent },
    { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRouteModule {}
