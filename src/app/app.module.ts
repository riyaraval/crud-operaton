import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './master-folder/home/home.component';
import { DataListComponent } from './master-folder/main-folder/data-list/data-list.component';
import { DataEditComponent } from './master-folder/main-folder/data-edit/data-edit.component';
import { DataCreateComponent } from './master-folder/main-folder/data-create/data-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataListComponent,
    DataEditComponent,
    DataCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
