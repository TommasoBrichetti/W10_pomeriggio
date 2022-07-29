import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonecardComponent } from './donecard.component';

describe('DonecardComponent', () => {
  let component: DonecardComponent;
  let fixture: ComponentFixture<DonecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
