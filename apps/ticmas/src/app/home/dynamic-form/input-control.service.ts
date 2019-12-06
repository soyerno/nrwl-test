import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from './generators/input-base';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputBase<any>[] ) {
    let group: any = {};
    inputs.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
