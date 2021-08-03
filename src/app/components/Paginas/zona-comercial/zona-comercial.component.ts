import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  vendedor: string;
  id: number;
  nombreZona: string;
  ciudad: string;
  listaP : number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, vendedor: 'Hydrogen', nombreZona: '1.0079', ciudad: 'H', listaP: 1000},
  {id: 2, vendedor: 'Helium', nombreZona: '1.0079', ciudad: 'He', listaP: 1000},
  {id: 3, vendedor: 'Lithium', nombreZona: '1.0079', ciudad: 'Li', listaP: 1000},
  {id: 4, vendedor: 'Beryllium', nombreZona: '1.0079', ciudad: 'Be', listaP: 1000},
  {id: 5, vendedor: 'Boron', nombreZona: '1.0079', ciudad: 'B', listaP: 1000},
  {id: 6, vendedor: 'Carbon', nombreZona: '1.0079', ciudad: 'C', listaP: 1000},
  {id: 7, vendedor: 'Nitrogen', nombreZona: '1.0079', ciudad: 'N', listaP: 1000},
  {id: 8, vendedor: 'Oxygen', nombreZona: '1.0079', ciudad: 'O', listaP: 1000},
  {id: 9, vendedor: 'Fluorine', nombreZona: '1.0079', ciudad: 'F', listaP: 1000},
  {id: 10, vendedor: 'Neon', nombreZona: '1.0079', ciudad: 'Ne', listaP: 1000},
];

@Component({
  selector: 'app-zona-comercial',
  templateUrl: './zona-comercial.component.html',
  styleUrls: ['./zona-comercial.component.css']
})
export class ZonaComercialComponent implements OnInit {

  displayedColumns: string[] = ['id', 'vendedor', 'nombreZona', 'ciudad', 'listaPrecios', 'accion'];
  dataSource =  new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
