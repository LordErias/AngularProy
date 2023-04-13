import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageSelectedComponent } from './no-page-selected.component';

describe('NoPageSelectedComponent', () => {
  let component: NoPageSelectedComponent;
  let fixture: ComponentFixture<NoPageSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPageSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
