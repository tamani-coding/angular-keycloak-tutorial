import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSpaceComponent } from './public-space.component';

describe('PublicSpaceComponent', () => {
  let component: PublicSpaceComponent;
  let fixture: ComponentFixture<PublicSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
