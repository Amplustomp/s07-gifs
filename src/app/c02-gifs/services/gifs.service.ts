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

}
