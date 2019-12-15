import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../generators/input-base';

@Component({
  selector: 'app-dynamic-form-input-editable-controls',
  templateUrl: './dynamic-form-input-editable-controls.component.html',
  styleUrls: ['./dynamic-form-input-editable-controls.component.scss']
})
export class DynamicFormInputEditableControlsComponent {
  @Input() input: InputBase<any>;
  // @Input() form: FormGroup;
  // get isValid() {
  //   return this.form.controls[this.input.key].valid;
  // }
}
