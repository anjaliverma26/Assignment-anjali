import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadminComponent } from './aadmin.component';

describe('AadminComponent', () => {
  let component: AadminComponent;
  let fixture: ComponentFixture<AadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
