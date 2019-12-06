import { Component } from '@angular/core';
import { CatsFacade, catsFormStructure, Cat } from '@ticmasworkspace/cats';
import { Observable } from 'rxjs';
import { OwnersFacade, ownersFormStructure, Owner } from '@ticmasworkspace/owners';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cats: Observable<Cat[]>;
  catFormStructure: any = catsFormStructure();

  owners: Observable<Owner[]>;
  ownersFormStructure: any = ownersFormStructure();

  constructor(
    public catFacade: CatsFacade,
    public ownerFacade: OwnersFacade
    ) {
    this.cats = this.catFacade.allCats$;
    this.catFacade.loadAll();
    this.owners = this.ownerFacade.allOwners$;
    this.ownerFacade.loadAll();
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
