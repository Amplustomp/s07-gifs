import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private resultadosService:GifsService) { }

  ngOnInit(): void {
  }

// Ejecuta el método del servicio
  //  el cual retorna un arreglo de imágenes
  get getResultados(){
    return this.resultadosService.getResultados
  }

}
