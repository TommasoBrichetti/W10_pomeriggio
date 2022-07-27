import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactivePostComponent } from './unactive-post.component';

describe('UnactivePostComponent', () => {
  let component: UnactivePostComponent;
  let fixture: ComponentFixture<UnactivePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnactivePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnactivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
