import { Component, OnInit } from '@angular/core';
import {faPaw} from '@fortawesome/free-solid-svg-icons'
import {faDog} from '@fortawesome/free-solid-svg-icons'
import{faCat} from '@fortawesome/free-solid-svg-icons'
import{faLockOpen} from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import {FormControl,FormGroup,Validators} from  '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fapaw=faPaw;
  fadog=faDog;
  facat=faCat;
  faopen=faLockOpen;
  faalt=faSignInAlt;

  // usuario:any={
  //   nombre:'',
  // contrasenia:''};


  // usuarios:any=[]


  constructor() { }


  formularioiniciosesion = new FormGroup({
    usuario: new FormControl ('',[Validators.required,Validators.maxLength(8)]),
    contrasenia: new FormControl ('',[Validators.required,Validators.maxLength(8)])
  });





  ngOnInit(): void {
  }

    get usuario(){
      return this.formularioiniciosesion.get('usuario');
    }
    

    get contrasenia(){
      return this.formularioiniciosesion.get('contrasenia');
    }

  


 guardar() {
//     this.usuarios.push({
// nombre:this.usuario.nombre,
// contrasenia:this.usuario.contrasenia

   //})
 
    console.log(this.formularioiniciosesion.value);


     }


    


    }