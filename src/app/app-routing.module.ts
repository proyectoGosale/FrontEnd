import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './components/Paginas/error404/error404.component';
import { ProductosComponent } from './components/Paginas/productos/productos.component';
import { AdminComponent } from './components/Paginas/admin/admin.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ZonaComercialComponent } from './components/Paginas/zona-comercial/zona-comercial.component';
import { ClientesComponent } from './components/Paginas/clientes/clientes.component';
import { CuentasxCobrarComponent } from './components/Paginas/cuentasx-cobrar/cuentasx-cobrar.component';
import { EstadisticasComponent } from './components/Paginas/estadisticas/estadisticas.component';
import { FacturaComponent } from './components/Paginas/factura/factura.component';
import { VendedoresComponent } from './components/Paginas/vendedores/vendedores.component';
import { InformacionComponent } from './components/Paginas/informacion/informacion.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'zona', component: ZonaComercialComponent },
  { path: 'cliente', component: ClientesComponent },
  { path: 'cuentasxcobrar', component: CuentasxCobrarComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'vendedores', component: VendedoresComponent },
  { path: 'info', component: InformacionComponent },

  /*Error 404 */
  { path: '**', component: Error404Component }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
