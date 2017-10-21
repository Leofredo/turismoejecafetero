import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manizales } from './manizales';

@Injectable()
export class ManizalesServerService {
  manizalesList: Array<Manizales>;

  constructor(private http: HttpClient) {}

  loadManizales() {
    this.http
      .get("http://localhost:1814/manizales/GetAllManizales")
      .subscribe(data => {
        this.manizalesList = data as Array<Manizales>;
      });
  }

  saveManizales(newManizales: Manizales) {
    let queryString = `?nombre=${newManizales.nombre}&fecha=${newManizales.fecha}&ubicacion=${newManizales.ubicacion}&historia=${newManizales.historia}`;
    this.http
      .get("http://localhost:1814/manizales/SaveManizales" + queryString)
      .subscribe(data => {
        this.loadManizales();
      });
  }
}
