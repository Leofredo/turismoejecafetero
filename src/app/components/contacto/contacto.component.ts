import { Component, OnInit } from '@angular/core';
import { InformacionService  } from '../../providers/informacion.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( public _is: InformacionService) { }

  ngOnInit() {
  }

}
