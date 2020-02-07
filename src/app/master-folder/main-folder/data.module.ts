import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListComponent } from './data-list/data-list.component';
import { DataEditComponent } from './data-edit/data-edit.component';
import { DataCreateComponent } from './data-create/data-create.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner"; 
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

const routes :Routes=[
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
    redirectTo:'/data/data-list',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    DataListComponent,
    DataEditComponent,
    DataCreateComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    NgbModule,
    NgbPaginationModule,
    RouterModule.forChild(routes),
    PaginationModule.forRoot(),
    FormsModule
  ]
})
export class DataModule { }
