import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../dynamic-form/generators/input-base';
import { DropdownInput } from '../../dynamic-form/generators/input-dropdown';
import { TextboxInput } from '../../dynamic-form/generators/input-textbox';
import { InputControlService } from '../../dynamic-form/input-control.service';
import { RadioInput } from '../../dynamic-form/generators/input-radio';
import { CheckboxInput } from '../../dynamic-form/generators/input-checkbox';
import { ToggleInput } from '../../dynamic-form/generators/toggle-textbox';

@Component({
  selector: 'app-form-generator-add-input',
  templateUrl: './form-generator-add-input.component.html',
  styleUrls: ['./form-generator-add-input.component.scss']
})
export class FormGeneratorAddInputComponent {
  // @Input() input: InputBase<any>;
  // @Input() form: FormGroup;
  // get isValid() {
  //   return this.form.controls[this.input.key].valid;
  // }
  @Output()
  save: EventEmitter<any> = new EventEmitter();

  formStructure: InputBase<any>[];
  form: FormGroup;

  withOptions: boolean = false;
  hideInitialValue: boolean = false;
  constructor(private qcs: InputControlService) {}

  ngOnInit() {
    this.formStructure = this.getFormStructure(false);
    this.form = this.qcs.toFormGroup(this.formStructure);
  }

  getFormStructure(isBoolean) {
    let inputs: InputBase<any>[] = [
      new DropdownInput({
        key: 'type',
        label: 'Type',
        value: 'Text',
        options: [
          { key: 'text', value: 'Text' },
          { key: 'dropdown', value: 'Dropdown' },
          { key: 'radio', value: 'Radio' },
          { key: 'checkbox', value: 'Checkbox' },
          { key: 'toggle', value: 'Toggle' }
        ],
        order: 1
      }),

      new TextboxInput({
        key: 'label',
        label: 'Label',
        value: 'Label',
        required: true,
        order: 2
      }),

      new ToggleInput({
        key: 'required',
        label: 'Required',
        value: true,
        required: true,
        order: 4
      })
    ];

    console.log(isBoolean)
    if (isBoolean) {
      inputs.concat(
        new ToggleInput({
          key: 'value',
          label: 'Value',
          value: 'Initial Value',
          required: false,
          order: 3
        })
      );
    } else {
      inputs.concat(
        new TextboxInput({
          key: 'value',
          label: 'Value',
          value: 'Initial Value',
          required: false,
          order: 3
        })
      );
    }

    return inputs.sort((a, b) => a.order - b.order);
  }

  onChange(input) {
    console.log(input);
    switch (input.type) {
      case 'checkbox':
      case 'radio':
      case 'dropdown':
        // code block
        this.withOptions = true;
        this.hideInitialValue = true;
        // this.formStructure = this.getFormStructure(false);
        break;
      case 'toggle':
        this.withOptions = true;
        this.hideInitialValue = false;
        // this.formStructure = this.getFormStructure(true);
      default:
        // this.formStructure = this.getFormStructure(false);
        this.hideInitialValue = false;
        this.withOptions = false;
      // code block
    }

    this.form = this.qcs.toFormGroup(this.formStructure);
  }

  addInput(newInput) {
    let newInputContructed;
    switch (newInput.type) {
      case 'text':
        newInputContructed = new TextboxInput(newInput);
        break;
      case 'dropdown':
        newInputContructed = new DropdownInput(newInput);
        break;
      case 'radio':
        newInputContructed = new RadioInput(newInput);
        break;
      case 'checkbox':
        newInputContructed = new CheckboxInput(newInput);
        break;
      case 'toggle':
        newInputContructed = new ToggleInput(newInput);
        break;
      default:
        break;
    }

    this.save.emit(newInputContructed);
  }
}
