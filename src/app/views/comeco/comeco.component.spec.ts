import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComecoComponent } from './comeco.component';

describe('ComecoComponent', () => {
  let component: ComecoComponent;
  let fixture: ComponentFixture<ComecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
