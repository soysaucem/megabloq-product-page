import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Form } from './form.model';

export interface FormState extends EntityState<Form> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'form' })
export class FormStore extends EntityStore<FormState, Form> {

  constructor() {
    super();
  }

}

