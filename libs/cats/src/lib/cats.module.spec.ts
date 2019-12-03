import { async, TestBed } from '@angular/core/testing';
import { CatsModule } from './cats.module';

describe('CatsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatsModule).toBeDefined();
  });
});
