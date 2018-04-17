import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { QuestService } from '../quest/quest.service';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ResultadoService implements Resolve<any> {

  private gabarito: any[] = [];
  constructor(private http: Http, private questService: QuestService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return {
      respostas: this.questService.getResultado(),
      gabarito: this.getGabarito()
    };
  }

  setData() {
    return this.http.get('assets/gabarito.json')
      .toPromise().then((respostas) => this.gabarito = respostas.json());
  }

  getGabarito() {
    return this.gabarito;
  }

}
