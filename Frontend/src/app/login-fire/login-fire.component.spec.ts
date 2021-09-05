import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFireComponent } from './login-fire.component';

describe('LoginFireComponent', () => {
  let component: LoginFireComponent;
  let fixture: ComponentFixture<LoginFireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
