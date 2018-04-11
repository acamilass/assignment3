import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CadastroModel } from './cadastro.model';
import { isNonNullObject } from '@firebase/util';
import { HelperService } from '../shared/utils/helper.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [AngularFireDatabase]
})
export class CadastroComponent implements OnInit {

  private cadastro: AngularFireList<any>;
  private usuario: CadastroModel;

  public cadastroForm: FormGroup;
  public nome: FormControl;
  public email: FormControl;
  public tempo: FormControl;

  constructor(private db: AngularFireDatabase, private router: Router) {
    this.cadastro = db.list('lista/cadastro');
    HelperService.backgroundImage('../../assets/images/bg-login.jpg');
    
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    this.nome = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^\w+\s+[\w\s]{1,22}/) // nome e sobre nome
    ]);

    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.tempo = new FormControl('', [
      Validators.required
    ]);


    this.cadastroForm = new FormGroup({
      nome: this.nome,
      email: this.email,
      tempo: this.tempo
    });

  }

  save() {

    const nome = this.nome.value;
    const email = this.email.value;
    const tempo = this.tempo.value;

    this.usuario = new CadastroModel(nome, email, tempo);

    const convertEmObjeto = Object.assign({}, this.usuario);

    if (this.cadastroForm.valid) {
      this.cadastro.push(convertEmObjeto).once('value', () => {
        this.resetForm();
        this.router.navigate(['/agradecimento'] /**, { skipLocationChange: true } **/);
      }, (err) => {
        alert('Um erro ocorreu, tente novamente mais tarde!');
      });

    } else {
      alert('Preencha o formulário corretamente.')
    }

  }

  resetForm() {
    this.cadastroForm.reset();
    
    this.nome.setErrors(null);
    this.email.setErrors(null);
    this.tempo.setErrors(null);
  }

}
