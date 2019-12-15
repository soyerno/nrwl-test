import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from './generators/input-base';
import { InputControlService } from './input-control.service';
import { map } from 'rxjs/operators';


import { SubSink } from "subsink";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [InputControlService]
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() inputs: InputBase<any>[] = [];
  @Input() editable: boolean = false;
  @Output()
  onChange: EventEmitter<any> = new EventEmitter();
  @Output()
  save: EventEmitter<any> = new EventEmitter();
  @Input() form: FormGroup;
  payLoad = '';

  private subs = new SubSink();

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.save.emit(this.form.value);
  }

  ngOnInit() {
    this.subs.add(this.form.valueChanges.pipe(
      map(changes => {
        console.log(changes);
        this.onChange.emit(changes);
      })
    ).subscribe());
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
