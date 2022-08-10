import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-gifs',
  templateUrl: './sidebar-gifs.component.html',
  styleUrls: ['./sidebar-gifs.component.css']
})
export class SidebarGifsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get getHistorial(){
    return ["mesa","chavo","Sergio","prueba"]
    //return this.buscaServicio.getHistorial
  }

  buscar(objeto:String){
      console.log("Buscar",objeto)
      //this.buscaServicio.buscarGifts(""+objeto)
  }

}
