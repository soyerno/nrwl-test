import { async, TestBed } from '@angular/core/testing';
import { OwnersModule } from './owners.module';

describe('OwnersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OwnersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OwnersModule).toBeDefined();
  });
});
