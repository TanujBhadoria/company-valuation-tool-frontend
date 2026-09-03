import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcfCalculator } from './dcf-calculator';

describe('DcfCalculator', () => {
  let component: DcfCalculator;
  let fixture: ComponentFixture<DcfCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcfCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcfCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
