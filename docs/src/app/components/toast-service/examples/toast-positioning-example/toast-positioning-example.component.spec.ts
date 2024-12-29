import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastPositioningExampleComponent } from './toast-positioning-example.component';

describe('ToastPositioningExampleComponent', () => {
  let component: ToastPositioningExampleComponent;
  let fixture: ComponentFixture<ToastPositioningExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastPositioningExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastPositioningExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
