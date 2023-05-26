import { Component, OnInit } from '@angular/core';
import { Oferta } from '../Sharedd/ofertas.model';
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'xyz-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[OfertasService]
})
export class DiversaoComponent implements OnInit {
  public diversao:Oferta[]=[]
  constructor(private ofertasService: OfertasService){}
ngOnInit(){
  this.ofertasService.GetOfertasCategoria('diversao')
    .then((ofertas:Oferta[])=>{
      this.diversao = ofertas;
      console.log(ofertas)
    })
    
}
}
