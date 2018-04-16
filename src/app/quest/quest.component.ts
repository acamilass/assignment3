import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';
import { QuestService } from './quest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
  providers: [QuestService]
})
export class QuestComponent implements OnInit {


  public respostas: String[] = [];
  public pergunta: string;
  public index: number;
  public img: string = `../../assets/images/quest/1.PNG`;
  public questFrom: FormGroup;
  public resposta: FormControl;

  @ViewChild(MatSelectionList) questions: MatSelectionList;

  public quests: any = [
    { respostas: [] }
  ];
  constructor(private quest: QuestService) {

  }


  ngOnInit() {

    this.createForm();
    this.index = 0;
    this.quest.getQuests().subscribe((pergunta: any) => {
      console.log(pergunta.json());
      
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
    console.log(this.respostas);
    this.index++
    this.img =  `../../assets/images/quest/${this.index + 1}.PNG` ;
  }

  createForm() {

    this.resposta = new FormControl({value: '', disabled: false}, Validators.required);
    this.questFrom = new FormGroup({
      'resposta': this.resposta
    });
  }

}
