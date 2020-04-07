import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectCounterCurrent } from '../../reducers';
import { FormBuilder, Validators } from '@angular/forms';

import * as CounterActions from './state/counter.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal-steps',
  templateUrl: './modal-steps.component.html',
  styleUrls: ['./modal-steps.component.scss']
})
export class ModalStepsComponent implements OnInit {
  counter$ = this.store.pipe(select(selectCounterCurrent));
  inputForm;
  submitted = false;
  constructor(
      private store: Store<AppState>,
      private fb: FormBuilder
  ) {
    this.inputForm = this.fb.group({
      inputControl: ['', Validators.compose(
        [ Validators.required,
          Validators.minLength(10),
          Validators.maxLength(14),
        ]),
      ]
    });
   }

  ngOnInit() {
    this.onReset();
  }

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  onReset() {
    this.store.dispatch(CounterActions.reset());
  }

}

