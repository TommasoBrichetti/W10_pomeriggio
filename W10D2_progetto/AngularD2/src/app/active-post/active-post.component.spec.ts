import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePostComponent } from './active-post.component';

describe('ActivePostComponent', () => {
  let component: ActivePostComponent;
  let fixture: ComponentFixture<ActivePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
