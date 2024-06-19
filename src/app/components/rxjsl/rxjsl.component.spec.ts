import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjslComponent } from './rxjsl.component';

describe('RxjslComponent', () => {
  let component: RxjslComponent;
  let fixture: ComponentFixture<RxjslComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjslComponent]
    });
    fixture = TestBed.createComponent(RxjslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
