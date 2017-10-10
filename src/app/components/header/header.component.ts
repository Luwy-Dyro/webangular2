import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor( public _is:InfoService,
               private router:Router) { }

  buscar_producto( termino:string){
      //console.log(termino);
      this.router.navigate( ['buscar', termino] );
  }

  ngOnInit() {
  }

}
