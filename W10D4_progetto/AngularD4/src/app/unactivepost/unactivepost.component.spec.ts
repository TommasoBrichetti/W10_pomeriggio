import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactivepostComponent } from './unactivepost.component';

describe('UnactivepostComponent', () => {
  let component: UnactivepostComponent;
  let fixture: ComponentFixture<UnactivepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnactivepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnactivepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
