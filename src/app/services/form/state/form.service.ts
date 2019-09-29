import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormStore } from './form.store';
import { Form } from './form.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FormService {

  private api = 'https://deco3801-megabloq.uqcloud.net/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Megabloq-Api-Key': 'hguiehrg348gh38ghegh49gh384g12rcj679gnjfn'
    })
  };

  constructor(
    private formStore: FormStore,
    private http: HttpClient
  ) { }

  add(form: Form): Observable<Form | never> {
    this.formStore.add(form);

    return this.http.post<any>(`${this.api}/create.php`, form, this.httpOptions)
      .pipe(catchError(err => throwError(err)));
  }
}
