import { Component, OnInit } from '@angular/core';
import { ModalService } from '@momentum-ui/angular';
import { AppModalComponent } from 'src/app/components/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private modal: ModalService) { }

  ngOnInit() {
  }

  testString = 'test';

  openModal() {
    const modalRef = this.modal.open({
      content: AppModalComponent,
      data: {value: this.testString},
      backdrop: true
    });
    modalRef.onHide$.subscribe( ex => {
     this.testString = ex.data.value;
     console.log(this.testString);
    });
  }

}
