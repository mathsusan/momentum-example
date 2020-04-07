import { ModalRef } from '@momentum-ui/angular';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectCounterCurrent } from 'src/app/reducers';

import * as CounterActions from '../modal-steps/state/counter.actions';
import * as CounterReducer from '../modal-steps/state/counter.reducer';



@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {
  counter$ = this.store.pipe(select(selectCounterCurrent));
  sampleData;
  lastScreen = CounterReducer.MAX_STEP;

  constructor(
    private modalRef: ModalRef,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.sampleData = this.modalRef.data;
  }

  public close() {
    this.modalRef.close(this.sampleData);
    this.store.dispatch(CounterActions.reset());
  }

  public next() {
    this.store.dispatch(CounterActions.increment());
  }

  public back() {
    this.store.dispatch(CounterActions.decrement());
  }

  public save() {
    // do save stuff here
    this.modalRef.close(this.sampleData);
    this.store.dispatch(CounterActions.reset());
  }

}


