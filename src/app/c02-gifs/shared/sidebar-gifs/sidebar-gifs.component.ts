import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar-gifs',
  templateUrl: './sidebar-gifs.component.html',
  styleUrls: ['./sidebar-gifs.component.css']
})
export class SidebarGifsComponent implements OnInit {

  constructor(private buscaService:GifsService) { }

  ngOnInit(): void {
  }

  get getHistorial(){
    //return ["mesa","chavo","Harrys","prueba"]        //<====     YA NOOOOOOO
    
    
    // LLamamos al servicio, 
    // por medio del nombre del nombre en la inyección
    return this.buscaService.getHistorial
  }

  // Método que ejecuta el método del servicio
  // Este método carga el arreglo de resultados
  buscar(objeto:String){
    console.log("Buscar",objeto)
    this.buscaService.buscarGifts(""+objeto)
  }

}
