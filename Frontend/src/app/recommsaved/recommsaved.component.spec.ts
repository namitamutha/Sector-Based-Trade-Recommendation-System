import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommsavedComponent } from './recommsaved.component';

describe('RecommsavedComponent', () => {
  let component: RecommsavedComponent;
  let fixture: ComponentFixture<RecommsavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommsavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
