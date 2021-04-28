import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service'
import {HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-detallescompra',
  templateUrl: './detallescompra.component.html',
  styleUrls: ['./detallescompra.component.css']
})
export class DetallescompraComponent implements OnInit {
  

  listaCompras:any ={
    descripcion:'',
    usuario:'',
    producto:''

  }

  constructor(private loginService:LoginService, private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.loginService.validarUsuarioActual();
    this.verCompras();
  }


  verCompras(){
    console.log("de detalle compras");
    var  usuario=this.loginService.obtenerUsuarioActual()
    this.httpclient.get( `http://localhost:8888/detallescompras/${usuario}`
   
  
    ).subscribe(res=>{
      
      this.listaCompras=res
        console.log(res);
      
        
       });
    
   
      }



}
