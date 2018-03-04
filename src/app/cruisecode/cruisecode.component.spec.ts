import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisecodeComponent } from './cruisecode.component';

describe('CruisecodeComponent', () => {
  let component: CruisecodeComponent;
  let fixture: ComponentFixture<CruisecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruisecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
