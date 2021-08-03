import { viewClassName } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('collapseSidenav') collapseSidenav! :MatSidenav

  @Output() openSidenav : EventEmitter<any> = new EventEmitter()

  /*variables globales */

  open : number = 0;
  user: number = 0
  togglesidenav : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.openSidenav.emit(
      this.togglesidenav = !this.togglesidenav
    )
  }

}
