export class Oferta{
    
        public id: number = 0
        public  categoria: string = ""
        public titulo: string=""
        public descricao_oferta: string = ""
        public anunciante: string=""
        public  valor: number=0
        public destaque: boolean = true
        public imagens: Array<any>=[]
}