import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

    // Solo para visualizar cuando se ejecuta por primera vez
    constructor() { console.log("Constructor GifsService   *******************  ")}


    // Método que ejecutará el componente buscar y el sidebar
    buscarGifts(query:string){
      console.log("buscarGifts final debiera ser Observable")
    }

      // Método que devuelve el arreglo de historial en el servicio
    get getHistorial(){
      return ["servicio","mesa","chavo","Sergio","prueba"]
    }

      // Retornamos un arreglo de imágenes con su título
  get getResultados(){
    return [
           {title:"servicio",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"dos",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"tres",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"cuatro",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"cinco",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
           ,{title:"seis",images:{downsized_medium:{url:"https://www.ortopediasmasvida.cl/media/catalog/product/s/i/silla-de-ruedas-electrica-ky120-cod-1085.jpg"}}}
          ]
  }

}
