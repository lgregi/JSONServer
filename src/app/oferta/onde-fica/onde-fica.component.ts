import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xyz-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit{
 constructor(private route:ActivatedRoute){

 }
 ngOnInit() {
  console.log('id do pai: ',this.route.parent?.snapshot.params['id'])  
 }
}
