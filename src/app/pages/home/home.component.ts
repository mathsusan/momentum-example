import { Component, OnInit } from '@angular/core';
import { ModalService } from '@momentum-ui/angular';
import { TestModalComponent } from 'src/app/components/test-modal/test-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showMe = false;
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

}
