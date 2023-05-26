import { Component, OnInit } from '@angular/core';
import { Oferta } from '../Sharedd/ofertas.model';
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'xyz-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers:[OfertasService]
})
export class RestaurantesComponent implements OnInit {
  public ofertas:Oferta[]=[]
  constructor(private ofertasService:OfertasService){  }

  ngOnInit() {
    this.ofertasService.GetOfertasCategoria('restaurante')
    .then((ofertas:Oferta[])=>{
      this.ofertas = ofertas;
     // console.log(ofertas)
    })
  }
}
