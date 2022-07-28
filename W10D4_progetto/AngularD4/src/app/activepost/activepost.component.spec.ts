import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivepostComponent } from './activepost.component';

describe('ActivepostComponent', () => {
  let component: ActivepostComponent;
  let fixture: ComponentFixture<ActivepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
