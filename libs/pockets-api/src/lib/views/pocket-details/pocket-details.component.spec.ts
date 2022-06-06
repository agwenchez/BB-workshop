import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketDetailsComponent } from './pocket-details.component';

describe('PocketDetailsComponent', () => {
  let component: PocketDetailsComponent;
  let fixture: ComponentFixture<PocketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocketDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
