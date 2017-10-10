import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-portafolio-detalle',
  templateUrl: './portafolio-detalle.component.html',
  styles: []
})
export class PortafolioDetalleComponent implements OnInit {

  producto:any = undefined;
  cod:any =undefined;

  constructor( private route:ActivatedRoute,
               private _ps:ProductosService  ) {

    route.params.subscribe( parametros =>{
        // console.log(parametros);
        // console.log(parametros ['id']);

        _ps.cargar_producto(parametros ['id'])
            .subscribe(res => {
              this.producto = res.json();
              this.cod = parametros ['id'];
              console.log(this.producto);
            })



    })

   }






  ngOnInit() {
  }

}
