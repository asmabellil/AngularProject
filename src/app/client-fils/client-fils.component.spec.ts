import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFilsComponent } from './client-fils.component';

describe('ClientFilsComponent', () => {
  let component: ClientFilsComponent;
  let fixture: ComponentFixture<ClientFilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
