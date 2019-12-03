import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CatsFacade } from 'libs/cats/src/lib/cats.facade';
import { Observable } from 'rxjs';
import { Cat } from 'libs/cats/src/lib/cats.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isCardRevealed = false;
  isNew = true;
  catId: string = null;
  cats: Observable<Cat[]>;

  catName = new FormControl();
  catAge = new FormControl();
  catBreed = new FormControl();

  constructor(public catFacade: CatsFacade) {
    this.cats = this.catFacade.allCats$;
    this.catFacade.loadAll();
  }

  revealToggleCard(isNew) {
    this.isCardRevealed = !this.isCardRevealed;
    this.isNew = isNew;
  }

  create() {
    this.catFacade.add({
      age: this.catAge.value,
      breed: this.catBreed.value,
      name: this.catName.value
    });
    this.isCardRevealed = false;
  }

  editCat(cat) {
    this.isCardRevealed = true;
    this.isNew = false;
    this.catId = cat._id;
    this.catAge.setValue(cat.age);
    this.catName.setValue(cat.name);
    this.catBreed.setValue(cat.breed);
  }

  save() {
    this.catFacade.update({
      _id: this.catId,
      age: this.catAge.value,
      breed: this.catBreed.value,
      name: this.catName.value
    });
    this.isCardRevealed = false;
  }
}
