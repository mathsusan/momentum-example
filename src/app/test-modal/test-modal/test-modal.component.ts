import { ModalRef } from '@momentum-ui/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {
  sampleData;

  constructor(
    private modalRef: ModalRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.sampleData = this.modalRef.data;
  }

  public close() {
    this.modalRef.close(this.sampleData);
  }

  public next() {
    this.router.navigate([{outlets: {modal: 'step1'}}]);
  }

  public back() {
    console.log('back');
  }

  public save() {
    // do save stuff here
    this.modalRef.close(this.sampleData);
  }

}


