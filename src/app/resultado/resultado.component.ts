import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface resultado {
  respostas?: any[];
  gabarito?: any[];
}

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  private resultado: resultado = {};
  public conhecimento: string;
  public imagem: string;
  public texto: string = `O resultado do seu conhecimento foi Desenvolvedor Júnior. Você é capaz de reconhecer os conceitos básicos e a sintaxe do JavaScript e HTML. Consegue entender como se estrutura algumas funções da linguagem e suas aplicações práticas. Continue praticando que logo logo você terá um maior domínio da linguagem.
        
  Tempo de experiência: Até 2 anos.
  
  Faixa Salarial: R$2000 - R$4000`;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(res => {
        this.resultadoFinal(res.response);
      })
      .unsubscribe();
  }


  resultadoFinal(resultado) {
    this.resultado = resultado
    console.log('resultado');
    console.log(resultado);
  
    const score = this.resultadoDaResposta().reduce((soma, valor) => {
      return soma + valor;
    }, 0);
    console.log('score');
    console.log(score);
    this.viewResult(score);
  }


  resultadoDaResposta(): any[] {
    const gabarito = this.resultado.gabarito;

    return this.resultado.respostas.map((resposta, index) => {
      if (resposta === gabarito[index].resp) {
        return gabarito[index].score
      }
      return 0;
    });
  }


  viewResult(score) {
    console.log('swtich');
    console.log(score);
    switch (true) {
      case ( 5 < score &&  score <= 10):
        this.conhecimento = 'Pleno'
        this.imagem = '../../assets/images/pleno.png'
        this.texto = `O resultado do seu conhecimento foi Desenvolvedor Pleno. Você já tem um conhecimento mais aprofundado dos conceitos da linguagem e tem familiaridade com a biblioteca JQuery e com Node JS. Continue praticando e jajá você se tornará um expert.

        \nTempo de experiência: 2 a 5 anos
        
        \nFaixa Salarial: R$4000 - R$6000`;
        break;
      case ( 11 <= score):
        this.conhecimento = 'Senior'
        this.imagem = '../../assets/images/senior.png';
        this.texto = `Você mandou muito bem no teste e seu nível de conhecimento é de um Desenvolvedor Senior. Você demonstrou saber o que está fazendo quando o assunto é programação com Javascript. Parabéns e continue sempre praticando!

        Tempo de experiência: Mais de 5 anos
        
        Faixa Salarial: R$6000 - R$10000`;
        break;
  
      default:
        this.conhecimento = 'Júnior'
        this.imagem = '../../assets/images/junior.png';
        this.texto = `O resultado do seu conhecimento foi Desenvolvedor Júnior. Você é capaz de reconhecer os conceitos básicos e a sintaxe do JavaScript e HTML. Consegue entender como se estrutura algumas funções da linguagem e suas aplicações práticas. Continue praticando que logo logo você terá um maior domínio da linguagem.
        
        Tempo de experiência: Até 2 anos.
        
        Faixa Salarial: R$2000 - R$4000`;
        break;
    }
  }

}
