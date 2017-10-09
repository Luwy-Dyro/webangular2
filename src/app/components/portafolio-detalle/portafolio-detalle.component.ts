import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio-detalle',
  templateUrl: './portafolio-detalle.component.html',
  styles: []
})
export class PortafolioDetalleComponent implements OnInit {

  constructor( private route:ActivatedRoute ) {

    route.params.subscribe( parametros =>{
        console.log(parametros);
        console.log(parametros ['id']);
    })

   }

  ngOnInit() {
  }

}
