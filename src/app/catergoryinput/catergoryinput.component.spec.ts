import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryinputComponent } from './catergoryinput.component';

describe('CatergoryinputComponent', () => {
  let component: CatergoryinputComponent;
  let fixture: ComponentFixture<CatergoryinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatergoryinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatergoryinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
