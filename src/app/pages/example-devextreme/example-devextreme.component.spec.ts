import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDevextremeComponent } from './example-devextreme.component';

describe('ExampleDevextremeComponent', () => {
  let component: ExampleDevextremeComponent;
  let fixture: ComponentFixture<ExampleDevextremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDevextremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDevextremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
