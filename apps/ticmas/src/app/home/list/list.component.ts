import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Cat } from 'libs/cats/src/lib/cats.model';
import { CatsFacade } from 'libs/cats/src/lib/cats.facade';

@Component({
  selector: 'ticmas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() cats: Cat[];

  constructor(public catFacade: CatsFacade) { }

  ngOnInit() {
  }

  delete(cat: Cat){
    this.catFacade.delete(cat)
  }
}
