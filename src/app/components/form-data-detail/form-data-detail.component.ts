import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormQuery } from '../../services/form/state/form.query';
import { Form } from 'src/app/services/form/state/form.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-data-detail',
  templateUrl: './form-data-detail.component.html',
  styleUrls: ['./form-data-detail.component.scss']
})
export class FormDataDetailComponent implements OnInit {

  @Input() id: string;
  @Output() destroy = new EventEmitter();

  form$: Observable<Form | never>;

  constructor(private formQuery: FormQuery) { }

  ngOnInit() {
    this.form$ = this.formQuery.getForm(this.id);
  }

}
