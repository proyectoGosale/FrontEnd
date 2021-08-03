import { Component, OnInit, Input, Output } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../../../services/login/login.service';
import { Login } from '../../../model/login.interface';
import { Response } from '../../../model/responce.interface';

import { Router } from '@angular/router'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() aparecerSidenav: EventEmitter<number> = new EventEmitter()

  /* variables globales */

  selectedFormAuthentic: number = 0;
  hide = true;
  eventoAparecer : any = localStorage.getItem('token');

  /* Inicializa el el formulario de registro de usuarios */
  
  loginForm = new FormGroup({
    email : new FormControl ('', [Validators.required, Validators.email]),
    password : new FormControl ('', Validators.required)
  })

  constructor(private loginService:LoginService, private router:Router, private formBuldier:FormBuilder) { }

  ngOnInit(): void {
  }

  /* funcion para loguearse y guardar el token */

  onLogin(value:Login) {
    console.log(value)
    this.loginService.loginByEmail(value).subscribe(resp => {
      console.log(resp);
      let dataResponse:Response=resp
      if (dataResponse.status===1) {
        localStorage.setItem('token', dataResponse.access_token);
        this.router.navigate(['admin']);
        this.aparecerSidenav.emit(
          this.eventoAparecer
        )
      }
      else {
        
      }
    })
  }

  /* Funcion que hace cambio de login a register o recuperar contraseña */

  changeForm(event: any) {
    console.log(event)
    this.selectedFormAuthentic=event
  }

}
