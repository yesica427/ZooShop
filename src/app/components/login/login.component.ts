import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:any={
    nombre:'ja',
  contrasenia:''};


  usuarios:any=[]


  constructor() { }

  ngOnInit(): void {


  }


  guardar(){
    this.usuarios.push({
nombre:this.usuario.nombre,
contrasenia:this.usuario.contrasenia

    })
    console.log(this.usuarios)
  }

}
