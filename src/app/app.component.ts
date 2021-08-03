import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  /* variables globales */

  myClass : any;
  ocultar: any = 0;

  constructor(){}

  openedSidenav(val:any) {
    console.log(val)
    this.myClass=val
  }

  aparecerSidenav(valor: any) {
    if (valor = null) {
      this.ocultar = 0;
    }
    else {
      this.ocultar = 1;
    } 
  }

}
