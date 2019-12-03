import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CatsFacade } from 'libs/cats/src/lib/cats.facade';
import { Observable } from 'rxjs';
import { Cat } from 'libs/cats/src/lib/cats.model';
import { Dictionary } from '@ngrx/entity';

const randomId = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isCardRevealed = false;
  isNew = true;
  cats: Observable<Cat[]>

  catName = new FormControl();
  catAge = new FormControl();
  catBreed = new FormControl();

  constructor(public catFacade: CatsFacade) {
    this.cats = this.catFacade.allCats$;
  }

  revealToggleCard(isNew) {
    this.isCardRevealed = !this.isCardRevealed;
    this.isNew = isNew;
  }

  create() {
    console.log(this.catAge.value, this.catBreed.value, this.catName.value);
    this.catFacade.add({
      age: this.catAge.value,
      breed: this.catBreed.value,
      name: this.catName.value,
      id: randomId()
    });
    this.isCardRevealed = false;
  }

  save() {
    console.log(this.catAge.value, this.catBreed.value, this.catName.value);
    this.isCardRevealed = false;
  }
}
