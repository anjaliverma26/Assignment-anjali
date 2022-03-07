import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificUserProfileComponent } from './specific-user-profile.component';

describe('SpecificUserProfileComponent', () => {
  let component: SpecificUserProfileComponent;
  let fixture: ComponentFixture<SpecificUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
