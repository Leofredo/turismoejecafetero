import { Component, OnInit } from '@angular/core';
import { Manizales } from '../manizales';
import { ManizalesDataMemoryService } from '../manizales-data-memory.service';

@Component({
  selector: 'app-listmzl',
  templateUrl: './listmzl.component.html',
  styleUrls: ['./listmzl.component.css']
})
export class ListmzlComponent implements OnInit {

    ubicacionOpt = ['Chipre', 'Centro Manizales',
     'Cable', 'Bosque Popular', 'Plaza de Toros', 'Enea', 'Barrio la Castellana'];


  constructor(private manizalesDataService: ManizalesDataMemoryService) { }

  ngOnInit() {
    this.manizalesDataService.loadManizales();
  }

}
