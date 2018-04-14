import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';
import { QuestService } from './quest.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
  providers: [QuestService]
})
export class QuestComponent implements OnInit, AfterViewInit {


  public selected: any;
  public index: number;
  @ViewChild(MatSelectionList) questions: MatSelectionList;

  public quests: any = [
    {respostas: []}
  ];
  constructor(private quest: QuestService) {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit() {

    this.index=0;
    this.quest.getQuests().subscribe((pergunta: any) => {
      console.log(pergunta.json());
      this.quests = pergunta.json().quests // array;
    });

    this.questions.selectionChange.subscribe((s: MatSelectionListChange) => {
      this.questions.deselectAll();
      s.option.selected = true;
    });
  }


  nextQuestion(event) {
    console.log('this.questions');
    console.log(this.selected);
    event.preventDefault();
    return this.index++;
  }

}
