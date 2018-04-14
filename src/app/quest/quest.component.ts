import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {

  
  @ViewChild(MatSelectionList) questions: MatSelectionList;


  constructor() { }

  ngOnInit() {
    this.questions.selectionChange.subscribe((s: MatSelectionListChange) => {          
      this.questions.deselectAll();
      s.option.selected = true;
  });
  }

}
