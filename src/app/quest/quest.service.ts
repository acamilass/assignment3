import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';

@Injectable()
export class QuestService {

  constructor(private http: Http) { }

  getQuests() {
   return this.http.get('assets/quest.json');
  }

}
