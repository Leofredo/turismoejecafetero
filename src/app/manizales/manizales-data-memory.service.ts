import { Manizales } from './manizales';
import { Injectable } from '@angular/core';

@Injectable()
export class ManizalesDataMemoryService {

  manizalesList: Array<Manizales>;

  constructor() {}

  private initializeManizalesList() {
    this.manizalesList = [
      {
        nombre: 'plaza de Toros',
        fecha: 'date',
        ubicacion: 6,
        historia: 'Usada para las corridas de toros durante la Feria de Manizales, eventos musicales y en menor medida deportivos.'
      },
       {
        nombre: 'La Catedral',
        fecha: 'date',
        ubicacion: 1,
        historia: 'La Catedral Basílica Metropolitana Nuestra Señora del Rosario de Manizales'
      },
    ];
  }

  loadManizales() {
    this.initializeManizalesList();
  }

 saveManizales(newManizales: Manizales) {
  this.manizalesList.push(newManizales);
 }
}
