import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedComponent } from './adopted.component';

describe('AdoptedComponent', () => {
  let component: AdoptedComponent;
  let fixture: ComponentFixture<AdoptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
