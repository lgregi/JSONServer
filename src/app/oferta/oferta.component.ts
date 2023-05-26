import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../Sharedd/ofertas.model';
@Component({
  selector: 'xyz-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [Oferta,OfertasService]
})
export class OfertaComponent implements OnInit {

  public route: ActivatedRoute
  
  
 
  constructor(route: ActivatedRoute, private ofertasService: OfertasService,public oferta : Oferta  ){
    this.route=route;
    
    
  }
ngOnInit(){
    console.log('id recuperado',this.route.snapshot.params['id'])
    //this.route.params.subscribe((parametro:any)=>{
      //console.log(parametro)
    //})
    this.ofertasService.GetOfertasID(this.route.snapshot.params['id'])
    .then((oferta:Oferta)=>{
     this.oferta = oferta
      console.log(this.oferta)
    }).catch(error=>error)
}
}
