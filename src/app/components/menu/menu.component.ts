import { Component, OnInit } from '@angular/core';
import {faPaw} from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  fapaw=faPaw;
  fashopping=faShoppingBasket;


  
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

  constructor() { }



  ngOnInit(): void {
  }

}
