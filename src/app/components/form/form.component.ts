import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../../services/form/state/form.service';
import { Form } from 'src/app/services/form/state/form.model';
import { guid } from '@datorama/akita';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submitted = false;

  getStartedForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  });

  constructor(
    private formService: FormService,
  ) { }

  ngOnInit() {
  }

  createForm(form: Form): void {
    form = {
      ...form,
      id: guid()
    };
    this.submitted = true;

    if (this.getStartedForm.status === 'VALID') {
      this.formService.add(form).subscribe(error => console.log(error));
      this.resetForm();
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.getStartedForm.reset('');
  }
}
