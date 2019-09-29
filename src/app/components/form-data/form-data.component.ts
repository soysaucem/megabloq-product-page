import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Form } from 'src/app/services/form/state/form.model';
import { FormQuery } from 'src/app/services/form/state/form.query';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit, OnDestroy {

  forms: Form[] | never;
  slicedForms: Form[];
  pageSize = 10;
  currentPage = 1;
  formsSub: Subscription;

  @Output() selectedForm = new EventEmitter();

  constructor(private formQuery: FormQuery) { }

  ngOnInit() {
    this.formsSub = this.formQuery.getForms().subscribe(data => {
      this.forms = data;
      this.slicedForms = data.slice(0, this.pageSize);
    });
  }

  ngOnDestroy() {
    this.formsSub.unsubscribe();
  }

  onChangePage(event: Event): void {
    this.slicedForms = this.forms.slice((this.currentPage - 1) * this.pageSize,
      (this.currentPage - 1) * this.pageSize + this.pageSize);
  }
}
