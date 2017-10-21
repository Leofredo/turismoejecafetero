import { Component, OnInit } from '@angular/core';
import { Manizales } from '../manizales';
import { ManizalesDataMemoryService } from '../manizales-data-memory.service';

@Component({
  selector: 'app-addmzl',
  templateUrl: './addmzl.component.html',
  styleUrls: ['./addmzl.component.css']
})
export class AddmzlComponent implements OnInit {
  public manizales: Manizales;

  ubicacionList = [
    { value: 0, label: 'Chipre' },
    { value: 1, label: 'Centro Manizales' },
    { value: 2, label: 'Cable' },
    { value: 3, label: 'Bosque Popular' },
    { value: 4, label: 'Plaza de Toros' },
    { value: 5, label: 'Enea' },
    { value: 6, label: 'Barrio la Castellana'},
  ];

  minDate = new Date(1850, 0, 1);
  maxDate = new Date(2018, 0, 1);

  constructor(private manizalesDataService: ManizalesDataMemoryService) {}

  ngOnInit() {
    this.manizales = new Manizales();
  }

  onNewManizales() {
    this.manizales = new Manizales();
  }

 onSaveManizales() {
 this.manizalesDataService.saveManizales(this.manizales);
  }
}
