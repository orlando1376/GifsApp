import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  // El carecter ! es para "Non-null assertion operator"
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  ngOnInit(): void {
  }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }
    
    this.gifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value = '';
  }

}