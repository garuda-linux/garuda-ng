import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Startv2Component } from './startv2.component';

describe('Startv2Component', () => {
  let component: Startv2Component;
  let fixture: ComponentFixture<Startv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Startv2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Startv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
