import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service'
import {HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-detallescompra',
  templateUrl: './detallescompra.component.html',
  styleUrls: ['./detallescompra.component.css']
})
export class DetallescompraComponent implements OnInit {

  constructor(private loginService:LoginService, private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.loginService.validarUsuarioActual;
  }


  verCompras(){
    this.httpclient.post( 'http://localhost:8888/detallescompras',{
  
   
   fk_idusuario:this.loginService.obtenerUsuarioActual()
  
   
  
    }).subscribe(res=>{
      
        console.log(res);
      
        
       });
    
   
      }



}
