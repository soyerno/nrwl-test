import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputControlService } from '../dynamic-form/input-control.service';
import { InputBase } from '../dynamic-form/generators/input-base';
import { DropdownInput } from '../dynamic-form/generators/input-dropdown';
import { TextboxInput } from '../dynamic-form/generators/input-textbox';

@Component({
  selector: 'ticmasworkspace-profile',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  formStructure: InputBase<any>[];
  form: FormGroup;
  constructor(private qcs: InputControlService) {}

  ngOnInit() {
    this.formStructure = this.getInitialFormStructure();
    this.form = this.qcs.toFormGroup(this.formStructure);
  }

  getInitialFormStructure() {
    const inputs: InputBase<any>[] = [
      new DropdownInput({
        key: 'cats',
        label: 'Cats',
        options: [],
        order: 2
      }),

      new TextboxInput({
        key: 'name',
        label: 'Name',
        value: 'My Name',
        required: true,
        order: 1
      })
    ];

    return inputs.sort((a, b) => a.order - b.order);
  }

  save($event) {
    console.log($event);
  }

  addInput($event) {
    this.formStructure = this.formStructure.concat($event);
    this.form = this.qcs.toFormGroup(this.formStructure);
  }
}
