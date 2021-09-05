import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrecommComponent } from './showrecomm.component';

import 'bootstrap/dist/js/bootstrap.bundle';


describe('ShowrecommComponent', () => {
  let component: ShowrecommComponent;
  let fixture: ComponentFixture<ShowrecommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrecommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowrecommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
