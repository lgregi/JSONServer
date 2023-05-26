import { Oferta } from "./Sharedd/ofertas.model"
//import{Http} from"@ngular/common/http"
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http' // para fazer requisições
import {from, Observable} from 'rxjs'
import { lastValueFrom } from "rxjs"
import { URL_API } from "./app.api"

//import { catchError,map,retry,toPromise } from "rxjs/operators"


@Injectable()
export class OfertasService {

    //public  url_api:string='http://localhost:3000/ofertas'

    constructor(private http: HttpClient){
        // chamar a classe no costrutor para utilizar o Httpclient
    }
    
    public getOfertas( ): Promise<Oferta[]> {
        // let ofertas = ['oferta1', 'oferta2', 'oferta3']
       return this.http.get(`${URL_API}`) // falzendo filtros dos produtos
            .toPromise()
            .then(resposta=> resposta)
            .catch(err=>err )
            
         //return this.Ofertas
     }

     public GetOfertasCategoria(categoria:string):Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then(cat=> cat)
           .catch(eror=>eror )

           //.then((response:any) => response.json())
           // .catch(error=>console.log(error))
     }
     public GetOfertasID(ID:number):Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${ID}`)
            .toPromise()
            .then((cat)=> {
                console.log(cat);
                let {...x}= [cat][0]
                let teste = Object.values(x)[0] // utilizado para tranformar um array em objeto e buscar o primeiro indice 
            console.log(x)
                return teste
            })
           .catch((eror)=>{
            console.log(eror)
            return eror
           } )

           //.then((response:any) => response.json())
           .catch(error=>console.log(error))
     }
 }

   /* public Ofertas: Array<Oferta>= [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]*/
   
    /*public getOfertas2():Promise<Array<Oferta>>{
        return new Promise((resolve,reject)=>{

            let ok: boolean = true
            if(ok){
                setTimeout(()=>{resolve(this.Ofertas)},3000)
                
            }else{
                reject({codigo:404, message:'erro de conexão'})
            }
            
            
        })
        .then((resposta:any) =>{
            console.log('1')
            return resposta
        } )
        .then((teste:any) =>{
            console.log(teste)
            return new Promise((resolve2,reject2)=>{
                setTimeout(()=>{
                    resolve2(teste)
                },5000)
            })
        } )
        .then((terceiro:any) =>{
            console.log('executado depois')
            return terceiro
        } )
    }
}*/
