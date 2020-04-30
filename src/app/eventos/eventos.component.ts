import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos = [];  

  constructor(private eventosService: EventosService) {     
  }

  ngOnInit(): void {    
    this.eventos = this.eventosService.getEventos();
  }
}
