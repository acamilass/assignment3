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
        this.texto = ``;
        break;
      case ( 11 <= score):
        this.conhecimento = 'Senior'
        this.imagem = '../../assets/images/senior.png';
        this.texto = ``;
        break;
  
      default:
        this.conhecimento = 'Júnior'
        this.imagem = '../../assets/images/junior.png';
        this.texto = ``;
        break;
    }
  }

}
