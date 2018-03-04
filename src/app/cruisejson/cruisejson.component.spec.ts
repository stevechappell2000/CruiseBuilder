import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisejsonComponent } from './cruisejson.component';

describe('CruisejsonComponent', () => {
  let component: CruisejsonComponent;
  let fixture: ComponentFixture<CruisejsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisejsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
