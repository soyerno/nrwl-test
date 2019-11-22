import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService, CredentialsService, CoreModule } from '../core';
import { MockAuthenticationService } from '../core/authentication/authentication.service.mock';
import { MockCredentialsService } from '../core/authentication/credentials.service.mock';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        NgbModule,
        CoreModule
      ],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService }
      ],
      declarations: [
        HeaderComponent,
        ShellComponent
      ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
