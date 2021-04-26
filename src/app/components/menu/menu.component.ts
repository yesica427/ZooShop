import { Component, OnInit } from '@angular/core';
import {faPaw} from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import {HttpClient}  from '@angular/common/http'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fapaw=faPaw;
  fashopping=faShoppingBasket;
  valorCategoria:any="";

  seleccionado:number=0;

  productos:any=[];
    producto:any ={
      nombre:'',
      categoria:'',
      fk_idcategoria:'',
      url:'',
      descripcion:''
  


    }

    


    productobyid:any ={
      nombre:'',
      categoria:'',
      fk_idcategoria:'',
      url:'',
      descripcion:''
  
    }




    categorias:any={
      idcategoria:'',
      nombrecategoria:'',
      descripcion:''
    }

categoriasDogs:any[]=[
  {
  nombre:"Ball",
  url:"assets/Imagenes/pelotas.jpg",
  precio:"7$",
  Descripcion:"soft colored balls",
  seleccion:""
  
  
  },
  {nombre:"Bowl DOG",
  url:"assets/Imagenes/plato.jpg",
  precio:"10$",
  Descripcion:"aluminum dog bowl",
  seleccion:""},

  {nombre:"Accesories DOG",
  url:"assets/Imagenes/accesoriesdog.jpg",
  precio:"15$",
  Descripcion:"Accesories for you dog of all the colors",
  seleccion:""},

  {nombre:"Toys DOG",
  url:"assets/Imagenes/imagen11.jpg",
  precio:"15$",
  Descripcion:"to stimulate their teeth",
  seleccion:""},
  
  {nombre:"Clothes DOG",
  url:"assets/Imagenes/imagen9.jpg",
  precio:"30$",
  Descripcion:"Beatifull clothes",
  seleccion:""},
  
  {nombre:"Clothes DOG",
  url:"assets/Imagenes/imagen4.jpg",
  precio:"20$",
  Descripcion:"cute green sweatshirt",
  seleccion:""},
  
  
  
  ];



  
  constructor( private httpclient:HttpClient) { }

 


  ngOnInit(): void {
    this.categorias
   this.seleccionado=4;
    this.obtenerCategorias();
    this.obtenerProductos();

  }

  


  obtenerProductos(){
  

   
   this.httpclient.get('http://localhost:8888/productos')
   .subscribe(res=>{
  
    
    this.productos=res;
    console.log(this.productos);
   });
  
  
  }


//obtener categorias

obtenerCategorias(){
this.httpclient.get('http://localhost:8888/categorias')
   .subscribe(res=>{
  
    this.categorias=res;
    
  
  
    console.log(this.categorias);
    
    
   });


  }
 



 obtenerproductosid(){

   this.valorCategoria = (<HTMLSelectElement>(
    document.getElementById("select-categoria")
  )).value;
  console.log(this.valorCategoria);

  this.httpclient.get(`http://localhost:8888/productos/${this.valorCategoria}`)
    .subscribe(res=>{
  
     

     this.productobyid=res;
     console.log(this.productobyid);
    
    
    });
}



}




