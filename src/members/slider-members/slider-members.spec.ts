import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMembers } from './slider-members';

describe('SliderMembers', () => {
  let component: SliderMembers;
  let fixture: ComponentFixture<SliderMembers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderMembers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMembers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
