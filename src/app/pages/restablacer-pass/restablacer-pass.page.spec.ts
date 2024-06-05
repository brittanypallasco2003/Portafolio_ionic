import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablacerPassPage } from './restablacer-pass.page';

describe('RestablacerPassPage', () => {
  let component: RestablacerPassPage;
  let fixture: ComponentFixture<RestablacerPassPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablacerPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
