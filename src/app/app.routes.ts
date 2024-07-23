import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [

     {path:"",redirectTo:"Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent},
    { path: 'InvoiceList', component: InvoiceListComponent },
    { path: 'invoices/:id', component: InvoiceDetailsComponent },
    { path: 'new', component: InvoiceDetailsComponent }
    
];

