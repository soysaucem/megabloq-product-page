import { Injectable } from '@angular/core';
import { QueryEntity, Order } from '@datorama/akita';
import { FormStore, FormState } from './form.store';
import { Form } from './form.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormQuery extends QueryEntity<FormState, Form> {

  private api = 'https://deco3801-megabloq.uqcloud.net/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Megabloq-Api-Key': 'hguiehrg348gh38ghegh49gh384g12rcj679gnjfn'
    })
  };

  constructor(
    protected store: FormStore,
    private http: HttpClient
  ) {
    super(store);
  }

  getForm(id: string): Observable<Form | never> {
    if (!this.hasEntity(id)) {
      this.getFormsFromServer();
    }

    return this.selectEntity(id);
  }

  getForms(): Observable<Form[] | never> {
    if (this.getCount() === 0) {
      this.getFormsFromServer();
    }

    return this.selectAll({sortBy: 'createdAt', sortByOrder: Order.DESC});
  }

  getFormsFromServer(): any {
    this.http.get<Form[]>(`${this.api}/read.php`, this.httpOptions)
      .pipe(catchError(err => {
        return throwError(err);
      }))
      .subscribe(response => this.store.set(response));
  }
}
