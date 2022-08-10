import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get getResultados(){
    //return this.resultados.getResultados
    return [
           {title:"uno",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"dos",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"tres",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"cuatro",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"cinco",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"seis",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
          ]
  }

}
