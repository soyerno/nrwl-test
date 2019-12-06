import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from './generators/input-base';
import { InputControlService } from './input-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [InputControlService]
})
export class DynamicFormComponent {
  @Input() inputs: InputBase<any>[] = [];
  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Input() form: FormGroup;
  payLoad = '';

  // constructor(private qcs: InputControlService) {}

  // ngOnInit() {
  //   this.form = this.qcs.toFormGroup(this.inputs);
  // }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.save.emit(this.form.value)
  }
}
