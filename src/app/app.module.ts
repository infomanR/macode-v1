import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './front/navbar/navbar.component';
import { ContainerComponent } from './front/container/container.component';
import { routes } from './app.routes';
import { InicioComponent } from './front/container/inicio/inicio.component';
import { AcercaComponent } from './front/container/acerca/acerca.component';
import { AdminImagesListComponent } from './back/admin-images-list/admin-images-list.component';
import { DashboardComponent } from './back/dashboard/dashboard.component';
import {ImageService} from './services/image.service';
import { ImageListComponent } from './front/container/inicio/image-list/image-list.component';
import { ImageComponent } from './front/container/inicio/image-list/image/image.component';
//import { FormsModule } from '@angular/forms';
import { AdminImageCreateComponent } from './back/admin-image-create/admin-image-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    BackComponent,
    NavbarComponent,
    ContainerComponent,
    InicioComponent,
    AcercaComponent,
    AdminImagesListComponent,
    DashboardComponent,
    ImageListComponent,
    ImageComponent,
    AdminImageCreateComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
