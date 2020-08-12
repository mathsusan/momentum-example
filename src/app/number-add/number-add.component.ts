import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-number-add',
  templateUrl: './number-add.component.html',
  styleUrls: ['./number-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberAddComponent implements OnInit {
  @Input() isValidating = false;
  @Input() validNumbers = [];
  @Input() invalidNumbers = [];
  @Input() textAreaPlaceholder: string;


  public addNumberForm: FormGroup;
  public numbersToAdd = [];

  constructor(  private fb: FormBuilder ) {
    this.addNumberForm = this.fb.group(
      {
        numberInput: ['', { updateOn: 'blur' }, []],
      },
      { updateOn: 'onsubmit' }
    );
   }

  ngOnInit() {
  }
  public removeNumber(numberToRemove: string) {
    this.validNumbers = this.validNumbers.filter(val => val !== numberToRemove);
  }

  public clearNumberForm() {
    this.addNumberForm.controls['numberInput'].patchValue('', { emitEvent: false });

  }

  public sendSubmit() {
    const temp = this.addNumberForm.controls['numberInput'].value;
    temp.replace(/\s+/g, '');
    this.numbersToAdd = temp.split(',');
  //  this.submitForm.emit(this.numbersToAdd);
    // clear out the input later keep the invalid ones
    this.clearNumberForm();
  }

}
