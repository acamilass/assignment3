import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

@Injectable()
export class QuestService {

  private resultados: string[];

  constructor(private http: Http) { }

  getQuests() {
   return this.http.get('assets/quest.json');
  }

  setResultado(resultados) {
    this.resultados = resultados
  }

  getResultado(): String[] {
    return this.resultados;
  }

}
