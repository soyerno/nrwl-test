import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputControlService } from '../dynamic-form/input-control.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  @Input() items: any;
  @Input() formStructure: any;
  @Input() entityName: string;
  @Output()
  create: EventEmitter<any> = new EventEmitter();
  @Output()
  update: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  isCardRevealed = false;
  isNew = true;
  itemId: string = null;

  constructor(private qcs: InputControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formStructure);
  }

  revealToggleCard(isNew) {
    this.isCardRevealed = !this.isCardRevealed;
    this.isNew = isNew;
  }

  createItem(item) {
    this.create.emit(item);
    this.isCardRevealed = false;
  }

  saveItem(item) {
    console.log(item);
    this.update.emit(item);
    this.isCardRevealed = false;
  }

  editItem(item) {
    this.isCardRevealed = true;
    this.isNew = false;
    this.itemId = item._id;

    Object.keys(this.form.controls).forEach(control => {
      this.form.controls[control].setValue(item[control]);
    });
  }

  deleteItem(item) {
    this.delete.emit(item);
  }

  formEmitter(item) {
    if (this.isNew) {
      this.createItem(item);
    } else {
      this.saveItem({ ...item, ...{ _id: this.itemId } });
    }
  }
}
