import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponentComponent } from './common-component.component';

describe('CommonComponentComponent', () => {
  let component: CommonComponentComponent;
  let fixture: ComponentFixture<CommonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
