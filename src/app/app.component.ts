import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPersonajes:any[]

  constructor(private PersonajesService: PersonajesService){
  }

  //llamamos al método al arrancar el componente

   ngOnInit(){

   this.PersonajesService.getAll()

   .then(response=>{

    //console.log(response)

    this.arrPersonajes= response['results']
   })
  }

}
