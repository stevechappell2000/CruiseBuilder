import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseformComponent } from './cruiseform.component';

describe('CruiseformComponent', () => {
  let component: CruiseformComponent;
  let fixture: ComponentFixture<CruiseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
