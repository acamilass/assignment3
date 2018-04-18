import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';
import { QuestService } from './quest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadoService } from '../resultado/resultado.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {


  public respostas: String[] = [];
  public pergunta: string;
  public index: number;
  // public img: string = `../../assets/images/quest/1.PNG`;
  public md: string = `../../assets/mds/1.md`;
  public questFrom: FormGroup;
  public resposta: FormControl;

  @ViewChild(MatSelectionList) questions: MatSelectionList;

  public quests: any = [
    { respostas: [] }
  ];
  constructor(private quest: QuestService,
              private resultadoService: ResultadoService,
              private router: Router) {

  }


  ngOnInit() {

    this.createForm();
    this.index = 0;
    this.quest.getQuests().subscribe((pergunta: any) => {
      this.quests = pergunta.json().quests // array;
      this.pergunta = this.quests[0].pergunta;
    });

    this.questions.selectionChange.subscribe((s: MatSelectionListChange) => {
      this.questions.deselectAll();
      s.option.selected = true;
    });
  }


  nextQuestion(event) {
    event.preventDefault();
    this.respostas.push(this.resposta.value[0].letra);
    this.resultadoService.setData();
    if (this.equal(10)) {
      this.quest.setResultado(this.respostas);
     
      return this.router.navigate(['result']);
    }
    this.viewUpdate();
  }

  createForm() {

    this.resposta = new FormControl({ value: '', disabled: false }, Validators.required);
    this.questFrom = new FormGroup({
      'resposta': this.resposta
    });
  }

  viewUpdate() {
    this.index++
    // this.img = `../../assets/images/quest/${this.index + 1}.PNG`;
    this.md = `../../assets/mds/${this.index + 1}.md`;
    window.scrollTo(0, 0); // sempre scroll no top
  }

  equal(num): boolean {
    if ((this.index + 1) === num) {
      return true;
    }

    return false;
  }

}
