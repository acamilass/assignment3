import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

@Injectable()
export class QuestService {

  private resultados: string[];
  private time: number;

  constructor(private http: Http) { }

  getQuests() {
   return this.http.get('assets/quest.json');
  }

  setResultado(resultados, time) {
    this.resultados = resultados
    this.time = time;
  }

  getResultado(): any {
    return {
      resultados: this.resultados,
      time: this.time
      };
  }

}
