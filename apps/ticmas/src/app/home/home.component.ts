import { Component } from '@angular/core';
import { CatsFacade, catsFormStructure, Cat } from '@ticmasworkspace/cats';
import { Observable, of } from 'rxjs';
import {
  OwnersFacade,
  ownersFormStructure,
  Owner
} from '@ticmasworkspace/owners';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cats: Observable<Cat[]>;
  catFormStructure: any = catsFormStructure();

  owners: Observable<Owner[]>;
  ownersFormStructure$: Observable<any>;

  constructor(public catFacade: CatsFacade, public ownerFacade: OwnersFacade) {
    this.cats = this.catFacade.allCats$;
    this.catFacade.loadAll();
    this.owners = this.ownerFacade.allOwners$;
    this.ownerFacade.loadAll();

    this.ownersFormStructure$ = this.cats.pipe(
      map(cats => {
        let form = ownersFormStructure().map(input => {
          if (input.key === 'cats') {
            input.options = cats.map(cat => {
              return { key: cat._id, value: cat.name };
            });
          }
          return input;
        });
        return form;
      })
    );

  }

  createCat($event) {
    this.catFacade.add($event);
  }

  updateCat($event) {
    this.catFacade.update($event);
  }

  deleteCat($event) {
    this.catFacade.delete($event);
  }

  createOwner($event) {
    this.ownerFacade.add($event);
  }

  updateOwner($event) {
    this.ownerFacade.update($event);
  }

  deleteOwner($event) {
    this.ownerFacade.update($event);
  }
}
