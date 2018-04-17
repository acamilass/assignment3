import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.component.html',
  styleUrls: ['./instrucoes.component.scss']
})
export class InstrucoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  info() {
    this.router.navigate(['quests']);
  }

}
