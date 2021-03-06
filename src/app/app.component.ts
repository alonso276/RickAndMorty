import { Component } from '@angular/core';
import { PersonajesService } from './personajes.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //!lo utilizaremos luego en el html
  arrPersonajes:any[]

  //!paginación
  currentPage:number
  numPages:number

  constructor(private PersonajesService: PersonajesService){
    this.currentPage=1
  }

  //llamamos al método al arrancar el componente

   ngOnInit(){

   this.PersonajesService.getAll()

   .then(response=>{

    //console.log(response)

    this.arrPersonajes= response['results'];
    this.numPages=response['info']['pages']
   })
  }

  async changePage(siguiente){

    if(siguiente){

      this.currentPage++;
    }else{

      this.currentPage--;
    }
    const response= await this.PersonajesService.getAll(this.currentPage);
    this.arrPersonajes= response['results']

  }

}
