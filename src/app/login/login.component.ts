import { Component } from '@angular/core';

@Component({
  selector: 'xyz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 public Username : string=''
 public passwor : string=''
  cadastrar(){
    //open('https://br.images.search.yahoo.com/search/images;_ylt=AwrFGwaCNytk8T4GB5z16Qt.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcxMDAwNQRfcgMyBGZyA21jYWZlZQRmcjIDcDpzLHY6aSxtOnNiLXRvcARncHJpZANsWWNzQjl6NlNpMk9Kazd4SVViaUZBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNici5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAzAEcXN0cmwDMTgEcXVlcnkDaW1hZ2VucyUyMGRlJTIwcHM1JTIwanBnBHRfc3RtcAMxNjgwNTUzODc2?p=imagens+de+ps5+jpg&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&ei=UTF-8&x=wrt&type=E211BR714G0#id=6&iurl=http%3A%2F%2Fblurredculture.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fps5.jpg&action=click')
    alert('nosso site ainda está em construção. Portanto, não foi possível realizar o seu login. Tente novamente mais tarde')
    if(this.Username=='admin' && this.passwor=='123'){
      open('http://localhost:4200/')
    }
  }
  Receber(teste:Event){
    this.Username=((<HTMLInputElement>teste.target).value)
    
    console.log(this.Username)
  }

  Testar(teste:Event){
    this.passwor=((<HTMLInputElement>teste.target).value)
    
    console.log(this.passwor)
  }

}
