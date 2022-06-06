import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketSvgComponent } from './pocket-svg.component';

describe('PocketSvgComponent', () => {
  let component: PocketSvgComponent;
  let fixture: ComponentFixture<PocketSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocketSvgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
