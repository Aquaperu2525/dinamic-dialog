import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainobraComponent } from './mainobra.component';

describe('MainobraComponent', () => {
  let component: MainobraComponent;
  let fixture: ComponentFixture<MainobraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainobraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
