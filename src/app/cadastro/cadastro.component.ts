import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CadastroModel } from './cadastro.model';
import { isNonNullObject } from '@firebase/util';



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

  constructor(private db: AngularFireDatabase) {
    this.cadastro = db.list('lista/cadastro');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    this.nome = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/^\w+\s+[\w\s]{1,22}/)
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

    const obj = Object.assign({}, this.usuario);

    if (this.cadastroForm.valid) {

      this.cadastro.push(obj).once('value', () => {
        // yourForm.reset(), yourForm.resetForm() don't work, but this does:
      
        this.cadastroForm.reset();
        this.nome.setErrors(null);
        this.email.setErrors(null);
        this.tempo.setErrors(null);
  
       // alert(`mudar de pagina`);
      }, (err) => {
        alert('Um erro ocorreu, tente novamente mais tarde!');
      });

    }

  }



}
