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
  public texto: string;

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
        this.texto = ` <p><b>O resultado do seu conhecimento foi Desenvolvedor Pleno.</b> Você já tem um conhecimento 
        mais aprofundado dos conceitos da linguagem e tem familiaridade com a biblioteca JQuery e com 
        Node JS. Continue praticando e jajá você se tornará um expert.</p>          
      <p>Tempo de experiência: 2 a 5 anos</p>            
      <p>Faixa Salarial: R$4000 - R$6000</p>
      <p>Alguns cursos que você pode fazer para aprimorar seus conhecimentos:</p>
      <p><a href="https://www.treinaweb.com.br/curso/javascript-intermediario">Javascript intermediário</a></p>
      <p><a href="https://www.alura.com.br/curso-online-jquery-a-biblioteca-do-mercado">JQuery: Domine a biblioteca mais popular do mercado</a></p>
      <p><a href="https://www.udemy.com/refactoru-intermediate-js/">Intermediate JavaScript Development</a></p>`;
        break;
      case ( 11 <= score):
        this.conhecimento = 'Senior'
        this.imagem = '../../assets/images/senior.png';
        this.texto = `<p>Você mandou muito bem no teste e <b>seu nível de conhecimento é de um Desenvolvedor Senior.</b> 
        Você demonstrou saber o que está fazendo quando o assunto é programação com Javascript. 
        Parabéns e continue sempre praticando!</p>          
      <p>Tempo de experiência: Mais de 5 anos</p>            
      <p>Faixa Salarial: R$6000 - R$10000</p>
      <p>Alguns cursos que você pode fazer para aprimorar seus conhecimentos:</p>
      <p><a href="https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001-br-advanced">Web front end avançado</a></p>
      <p><a href="https://www.alura.com.br/curso-online-javascript-padroes-abordagem-funcional">JavaScript: De padrões a uma abordagem funcional</a></p>
      <p><a href="https://www.treinaweb.com.br/curso/javascript-avancado">JavaScript Avançado</a></p>`;
        break;
  
      default:
        this.conhecimento = 'Júnior'
        this.imagem = '../../assets/images/junior.png';
        this.texto = `<p><b>O resultado do seu conhecimento foi Desenvolvedor Júnior.</b> Você é capaz de reconhecer os c
        onceitos básicos e a sintaxe do JavaScript e HTML. Consegue entender como se estrutura algumas funções da linguagem e suas aplicações práticas. 
        Continue praticando que logo logo você terá um maior domínio da linguagem.</p>          
      <p>Tempo de experiência: Até 2 anos</p>            
      <p>Faixa Salarial: R$2000 - R$4000</p>
      <p>Alguns cursos que você pode fazer para aprimorar seus conhecimentos:</p>
      <p><a href="https://www.alura.com.br/curso-online-javascript-programando-na-linguagem-web">Javascript: Programando na linguagem da web</a></p>
      <p><a href="https://www.treinaweb.com.br/curso/javascript-basico">Javascript Básico</a></p>
      <p><a href="https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001">Fundamentos Web Front End</a></p>`;
        break;
    }
  }

}
