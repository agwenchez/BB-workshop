import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketsListComponent } from './pockets-list.component';

describe('PocketsListComponent', () => {
  let component: PocketsListComponent;
  let fixture: ComponentFixture<PocketsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocketsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
