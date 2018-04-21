import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ResultadoService } from '../resultado.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  public feedbackForm: FormGroup;
  public feedback: FormControl;

  constructor(
    private db: AngularFireDatabase,
    private resultService: ResultadoService,
    private toastOpts: ToastOptions,
    public toastr: ToastsManager) { 
      this.toastr.setRootViewContainerRef(this.resultService.getVCR());
      this.toastOpts.toastLife = 8000;
      this.toastOpts.positionClass = 'toast-top-right';
      this.toastOpts.showCloseButton = true;
    }

  ngOnInit() {
    this.createForm();
  }


  public createForm() {

    this.feedback = new FormControl({ value: '', disabled: false }, Validators.required);
    this.feedbackForm = new FormGroup({
      'feedback': this.feedback
    });
  }

  public send() {
    const uid =   window.localStorage.getItem('currentUser');
    const dbRef = this.db.object(`feedback/${uid}`);
    dbRef.update({"feedback": this.feedback.value.toString().replace(/\n/g,' ')})
    .then(()  => {
      this.toastr.success('Obrigado, por sua participação!','Contrate Devs');
    }).catch(() => {
      this.toastr.success('Obrigado, por sua participação!','Contrate Devs');
    })
  
  }

}
