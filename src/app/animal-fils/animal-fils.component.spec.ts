import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFilsComponent } from './animal-fils.component';

describe('AnimalFilsComponent', () => {
  let component: AnimalFilsComponent;
  let fixture: ComponentFixture<AnimalFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
