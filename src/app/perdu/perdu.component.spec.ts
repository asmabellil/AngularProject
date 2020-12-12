import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerduComponent } from './perdu.component';

describe('PerduComponent', () => {
  let component: PerduComponent;
  let fixture: ComponentFixture<PerduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
