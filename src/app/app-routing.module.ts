import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './master-folder/home/home.component';
import { DataListComponent } from './master-folder/main-folder/data-list/data-list.component';
import { DataEditComponent } from './master-folder/main-folder/data-edit/data-edit.component';
import { DataCreateComponent } from './master-folder/main-folder/data-create/data-create.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'signinsignup',
    loadChildren:()=>import('./master-folder/authentication/signin-signup/signin-signup-routing.module').then(m=>m.SigninSignupRoutingModule)
  },
  {
    path:'data-list',
    component:DataListComponent  
  },
  {
    path:'data-edit/:id',
    component:DataEditComponent
  },
  {
    path:'data-create',
    component:DataCreateComponent
  },
  {
    path:'',
    redirectTo:'/data-list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
