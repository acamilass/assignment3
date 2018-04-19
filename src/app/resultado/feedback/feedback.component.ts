import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  public feedbackForm: FormGroup;
  public feedback: FormControl;

  constructor(private db: AngularFireDatabase) { }

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
    const uid =  this.db.database.app.auth().currentUser.uid;
    const dbRef = this.db.object(`feedback/${uid}`);
    dbRef.update({"feedback": this.feedback.value.toString().replace(/\n/g,' ')});
  
  }

}
