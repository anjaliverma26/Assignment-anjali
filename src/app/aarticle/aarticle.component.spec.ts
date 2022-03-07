import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AarticleComponent } from './aarticle.component';

describe('AarticleComponent', () => {
  let component: AarticleComponent;
  let fixture: ComponentFixture<AarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
