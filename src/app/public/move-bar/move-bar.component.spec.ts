import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBarComponent } from './move-bar.component';

describe('MoveBarComponent', () => {
  let component: MoveBarComponent;
  let fixture: ComponentFixture<MoveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
