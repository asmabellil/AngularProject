import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouveComponent } from './trouve.component';

describe('TrouveComponent', () => {
  let component: TrouveComponent;
  let fixture: ComponentFixture<TrouveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrouveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
