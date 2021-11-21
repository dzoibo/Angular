import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreilViewComponent } from './appreil-view.component';

describe('AppreilViewComponent', () => {
  let component: AppreilViewComponent;
  let fixture: ComponentFixture<AppreilViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppreilViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppreilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
