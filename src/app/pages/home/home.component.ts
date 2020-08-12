import { Component, OnInit } from '@angular/core';
import { ModalService } from '@momentum-ui/angular';
import { TestModalComponent } from '../../test-modal/test-modal/test-modal.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showMe = false;
  public expand = false;
  public showClear = true;
  testString = 'test';
  constructor(private modal: ModalService) { }

  ngOnInit() {
  }


  public showDrawer() {
    this.showMe = true;
  }

  changeDrawer(isOpen) {
    this.showMe = isOpen;
  }

  openModal() {
    const modalRef = this.modal.open({
      content: TestModalComponent,
      data: {value: this.testString},
      backdrop: true
    });
    modalRef.onHide$.subscribe( ex => {
     this.testString = ex.data.value;
     console.log(this.testString);
    });
  }
  public getShowClear() {
    return this.showClear && document.getElementById('myInput');
  }

  public expandMe() {
    this.expand = true;
    this.showClear = true;
    document.getElementById('myInput').focus();
  }
  public closeMe($event) {
    if ( ($event.currentTarget.classList).contains('md-input--after') ) {
      $event.stopPropagation();
      this.clearMe();
      return;
    }
    this.expand = false;
    this.showClear = false;
  }

  public clearMe() {
    document.getElementById('myInput').focus();
    console.log('clear me');
  }

}
