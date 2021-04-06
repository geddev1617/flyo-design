import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyopageComponent } from './flyopage.component';

describe('FlyopageComponent', () => {
  let component: FlyopageComponent;
  let fixture: ComponentFixture<FlyopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
