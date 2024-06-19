import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeadminComponent } from './welcomeadmin.component';

describe('WelcomeadminComponent', () => {
  let component: WelcomeadminComponent;
  let fixture: ComponentFixture<WelcomeadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeadminComponent]
    });
    fixture = TestBed.createComponent(WelcomeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
