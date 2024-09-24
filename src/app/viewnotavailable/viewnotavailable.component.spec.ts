import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnotavailableComponent } from './viewnotavailable.component';

describe('ViewnotavailableComponent', () => {
  let component: ViewnotavailableComponent;
  let fixture: ComponentFixture<ViewnotavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewnotavailableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewnotavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
