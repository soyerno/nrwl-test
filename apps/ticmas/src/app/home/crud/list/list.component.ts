import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ticmas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() items: any[];
  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  editItem(item) {
    this.edit.emit(item);
  }

  deleteItem(item) {
    this.delete.emit(item);
  }
}
