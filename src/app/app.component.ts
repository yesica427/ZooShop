import { APP_BOOTSTRAP_LISTENER, Component } from '@angular/core';
import {faPaw} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


 export class AppComponent  {
   title = 'zooshop';

   fapaw=faPaw


 }

var mycarusel=document.querySelector('#carrusel')


