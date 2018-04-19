import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FeedbackComponent } from './feedback/feedback.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

interface resultado {
  respostas?: {
    resultados: any,
    time: any
  };
  gabarito?: any[];
}

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  private teste: resultado = {};
  public conhecimento: string;
  public tempoDoTeste: number;
  public imagem: string = '../../assets/images/pleno.png';
  public texto: string = '';

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private db: AngularFireDatabase) { }

  ngOnInit() {
    this.route.data
      .subscribe(res => {
        this.resultadoFinal(res.response);
      })
      .unsubscribe();
  }


  resultadoFinal(resposta) {
    this.teste = resposta;
    this.tempoDoTeste = this.teste.respostas.time;
  
    const score = this.resultadoDaResposta().reduce((soma, valor) => {
      return soma + valor;
    }, 0);
    this.viewResult(score);
  }


  resultadoDaResposta(): any[] {
    const gabarito = this.teste.gabarito ? this.teste.gabarito : [];

    return this.teste.respostas.resultados.map((resposta, index) => {
      if (resposta === gabarito[index].resp) {
        return gabarito[index].score
      }
      return 0;
    });
  }

  salvarResultado() {
    const uid =  this.db.database.app.auth().currentUser.uid;;
    const dbRef = this.db.object(`/feedback/${uid}`);
    dbRef.set({
      conhecimento: this.conhecimento,
      tempoDoTeste: this.tempoDoTeste
    });
  }


  public openModal() {
    this.dialog.open(FeedbackComponent, {
      width: '50%'
    });
  }


  viewResult(score) {
    switch (true) {
      case ( 5 < score &&  score <= 10):
        this.conhecimento = 'Pleno'
        this.imagem = '../../assets/images/pleno.png'
        this.texto = ` <h5><b>O resultado do seu conhecimento foi Desenvolvedor Pleno.</b></h5><p> Você já tem um conhecimento 
        mais aprofundado dos conceitos da linguagem e tem familiaridade com a biblioteca JQuery e com 
        Node JS. Continue praticando e jajá você se tornará um expert.</p>          
      <p>Tempo de experiência: 2 a 5 anos</p>            
      <p>Faixa Salarial: R$4000 - R$6000</p>
      <p>Alguns cursos que você pode fazer para aprimorar seus conhecimentos:</p>
      <img class="img-ilustrativa" src="../../assets/images/bg-quest.png" alt="imagem ilustrativa">
      <p><a href="https://www.treinaweb.com.br/curso/javascript-intermediario">Javascript intermediário</a></p>
      <p><a href="https://www.alura.com.br/curso-online-jquery-a-biblioteca-do-mercado">JQuery: Domine a biblioteca mais popular do mercado</a></p>
      <p><a href="https://www.udemy.com/refactoru-intermediate-js/">Intermediate JavaScript Development</a></p>`;
      this.salvarResultado();
        break;
      case ( 11 <= score):
        this.conhecimento = 'Senior'
        this.imagem = '../../assets/images/senior.png';
        this.texto = `<h5>Você mandou muito bem no teste e <b>seu nível de conhecimento é de um Desenvolvedor Senior.</b></h5><p> 
        Você demonstrou saber o que está fazendo quando o assunto é programação com Javascript. 
        Parabéns e continue sempre praticando!</p>          
      <p>Tempo de experiência: Mais de 5 anos</p>            
      <p>Faixa Salarial: R$6000 - R$10000</p>
      <img class="img-ilustrativa" src="../../assets/images/bg-quest.png" alt="imagem ilustrativa">
      <p>Alguns cursos que você pode fazer para aprimorar seus conhecimentos:</p>
      <p><a href="https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001-br-advanced">Web front end avançado</a></p>
      <p><a href="https://www.alura.com.br/curso-online-javascript-padroes-abordagem-funcional">JavaScript: De padrões a uma abordagem funcional</a></p>
      <p><a href="https://www.treinaweb.com.br/curso/javascript-avancado">JavaScript Avançado</a></p>`;
      this.salvarResultado();
        break;
  
      default:
        this.conhecimento = 'Júnior'
        this.imagem = '../../assets/images/junior.png';
        this.texto = `<h5><b>O resultado do seu conhecimento foi Desenvolvedor Júnior.</b></h5><p> Você é capaz de reconhecer os c
        onceitos básicos e a sintaxe do JavaScript e HTML. Consegue entender como se estrutura algumas funções da linguagem e suas aplicações práticas. 
        Continue praticando que logo logo você terá um maior domínio da linguagem.</p>          
      <p>Tempo de experiência: Até 2 anos</p>            
      <p>Faixa Salarial: R$2000 - R$4000</p>
      <img class="img-ilustrativa" src="../../assets/images/bg-quest.png" alt="imagem ilustrativa">
      <p>Alguns cursos que você pode fazer para aprimorar seus conhecimentos:</p>
      <p><a href="https://www.alura.com.br/curso-online-javascript-programando-na-linguagem-web">Javascript: Programando na linguagem da web</a></p>
      <p><a href="https://www.treinaweb.com.br/curso/javascript-basico">Javascript Básico</a></p>
      <p><a href="https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001">Fundamentos Web Front End</a></p>`;
      this.salvarResultado();
        break;
    }

    
  }

}
