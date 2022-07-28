import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddetailComponent } from './carddetail.component';

describe('CarddetailComponent', () => {
  let component: CarddetailComponent;
  let fixture: ComponentFixture<CarddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
