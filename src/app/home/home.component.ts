import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../Sharedd/ofertas.model';
//import {Injectable} from '@angular/core'
//import { HttpClient } from '@angular/common/http'
//import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]  // maneira correta de importar servicos
})
export class HomeComponent {
 public ofertas : Oferta[] =[]// este atrubuto que manda os dados para o Ngfor do html
  constructor(private ofertasService: OfertasService) {
    //this.ofertas= this.ofertasService.getOfertas()
  }
  ngOnInit(){
    //this.ofertas= this.ofertasService.getOfertas()
    console.log('rodando')
    this.ofertasService.getOfertas()

    // está recebendo a promisse
    .then((ofertas:Oferta[])=>{
      this.ofertas= ofertas
      console.log('resolvida')

      //(reje:any)=>{console.log(reje)} // recebe o reject
    })       

  .catch((reje:any)=>{console.log(reje)} )// recebe o reject
  }
}
