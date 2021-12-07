import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayColorsComponent } from './display-colors.component';

describe('DisplayColorsComponent', () => {
  let component: DisplayColorsComponent;
  let fixture: ComponentFixture<DisplayColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
