import { ModalRef } from '@momentum-ui/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {
  sampleData;
  inputForm;
  submitted = false;
  constructor(private modalRef: ModalRef, private fb: FormBuilder) {

    this.inputForm = this.fb.group({
      inputControl: ['', Validators.compose(
        [ Validators.required,
          Validators.minLength(10),
          Validators.maxLength(14),
          ValidateCustom
        ]),
      ]
    });
  }

  ngOnInit() {
    this.sampleData = this.modalRef.data;
  }

  public close() {

    this.modalRef.close(this.sampleData);
  }

}

function ValidateCustom(control: AbstractControl) {
  if (!control.value.startsWith('h')) {
    return { customValid: true };
  }
  return null;
}
