import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyService } from 'src/app/service/property/property.service';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  { path: 'property-details', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule)},
  { path: 'property-register', loadChildren: () => import('./pages/property-register/property-register.module').then(m => m.PropertyRegisterModule)},
  { path: 'user-register', loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'search-form', loadChildren: () => import('./pages/search-form/search-form.module').then(m => m.SearchFormModule) },
  { path: 'property/:id', loadChildren: () => import('./pages/property-details/property-details.module').then(m => m.PropertyDetailsModule) },
  { path: 'find', loadChildren: () => import('./components/find/find.module').then(m => m.FindModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: 'PropertyService', useClass: PropertyService}],

  exports: [RouterModule]
})
export class AppRoutingModule { }
