import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompoComponent } from './first-compo.component';

describe('FirstCompoComponent', () => {
  let component: FirstCompoComponent;
  let fixture: ComponentFixture<FirstCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
