import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../generators/input-base';
import { TextboxInput } from '../generators/input-textbox';
import { InputControlService } from '../input-control.service';
import { OptionInput } from '../generators/input-option';

@Component({
  selector: 'app-dynamic-input-editable-options',
  templateUrl: './dynamic-input-editable-options.component.html',
  styleUrls: ['./dynamic-input-editable-options.component.scss']
})
export class DynamicFormInputEditableOptionsComponent implements OnInit {
  @Output()
  onChange: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  inputs: any = this.getInitialFormStructure();

  constructor(private qcs: InputControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.inputs);
  }

  getInitialFormStructure() {
    const inputs: InputBase<any>[] = [
      new OptionInput({
        key: 'option1',
        label: 'Label',
        value: '',
        required: true
      })
    ];

    return inputs;
  }

  generateNewOptionInput() {
    const index = this.inputs.length;
    return new OptionInput({
      key: 'option' + index,
      label: 'Label',
      value: '',
      required: true
    });
  }

  onSubmit($event) {
    console.log($event);
    this.onChange.emit($event)
  }

  addOne($event) {
    console.log($event);
    $event.preventDefault();
    this.inputs = this.inputs.concat(this.generateNewOptionInput());
    this.form = this.qcs.toFormGroup(this.inputs);
  }
}
