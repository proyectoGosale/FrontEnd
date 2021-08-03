import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Material angular */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { Error404Component } from './components/Paginas/error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductosComponent } from './components/Paginas/productos/productos.component';
import { AdminComponent } from './components/Paginas/admin/admin.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ZonaComercialComponent } from './components/Paginas/zona-comercial/zona-comercial.component';
import { ClientesComponent } from './components/Paginas/clientes/clientes.component';
import { VendedoresComponent } from './components/Paginas/vendedores/vendedores.component';
import { FacturaComponent } from './components/Paginas/factura/factura.component';
import { CuentasxCobrarComponent } from './components/Paginas/cuentasx-cobrar/cuentasx-cobrar.component';
import { EstadisticasComponent } from './components/Paginas/estadisticas/estadisticas.component';
import { InformacionComponent } from './components/Paginas/informacion/informacion.component';

import { AppRoutingModule } from '../app/app-routing.module'; /* app routing */

import { ReactiveFormsModule, FormsModule } from '@angular/forms'; /* libreria para los formularios */

import { HttpClientModule } from '@angular/common/http' /* importamos libreria de httpclient para el uso de apis */



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    Error404Component,
    ProductosComponent,
    AdminComponent,
    SidenavComponent,
    ZonaComercialComponent,
    ClientesComponent,
    VendedoresComponent,
    FacturaComponent,
    CuentasxCobrarComponent,
    EstadisticasComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
