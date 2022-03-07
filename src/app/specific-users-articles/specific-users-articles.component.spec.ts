import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificUsersArticlesComponent } from './specific-users-articles.component';

describe('SpecificUsersArticlesComponent', () => {
  let component: SpecificUsersArticlesComponent;
  let fixture: ComponentFixture<SpecificUsersArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificUsersArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificUsersArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
