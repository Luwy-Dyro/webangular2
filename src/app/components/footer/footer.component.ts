import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  public anio:number;

  constructor( public _is:InfoService) {
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
