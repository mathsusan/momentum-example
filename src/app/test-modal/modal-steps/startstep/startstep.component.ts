import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-startstep',
  templateUrl: './startstep.component.html',
  styleUrls: ['./startstep.component.scss']
})
export class StartstepComponent {
  inputForm;

  constructor(
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

}
