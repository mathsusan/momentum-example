import { ModalRef } from '@momentum-ui/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-modal',
  template: `
    <md-modal
      htmlId="modal1"
      aria-label="modal1"
    >
      <md-modal-header
        headerLabel="Default Modal">
      </md-modal-header>
      <md-modal-body>
        <p>This is a modal</p>
        <form [formGroup]="inputForm">
        <md-input-container
          inputSize="small-5"
          label="Default Input"
        >
          <input
            mdInput
            formControlName="inputControl"
            id="example-default-input"
          />
        </md-input-container>
      </form>
      form value: {{ inputForm.value.inputControl }}

      <div *ngIf="inputForm.controls['inputControl'].hasError('minlength')">
        Need Min Length of 10
      </div>

      <div *ngIf="inputForm.controls['inputControl'].hasError('maxlength')">
        Max Length should be 14
      </div>

      <div *ngIf="inputForm.controls['inputControl'].hasError('customValid')">
        Custom Validator: Doesn't start with 'custom'
      </div>
      </md-modal-body>
      <md-modal-footer>
        <button md-button
          alt="Close Modal"
          type="button"
          aria-label="Close Modal"
          (click)="close()"
        > Cancel
        </button>
        <button md-button
          color="blue"
          alt="Submit Form"
          type="submit"
          aria-label="Submit Form"
          (click)="close()"
        >
          OK
        </button>
      </md-modal-footer>
    </md-modal>
  `
})
export class AppModalComponent implements OnInit {
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
  if (!control.value.startsWith('custom')) {
    return { customValid: true };
  }
  return null;
}
