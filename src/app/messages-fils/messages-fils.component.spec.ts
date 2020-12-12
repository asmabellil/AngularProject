import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFilsComponent } from './messages-fils.component';

describe('MessagesFilsComponent', () => {
  let component: MessagesFilsComponent;
  let fixture: ComponentFixture<MessagesFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
