import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastSeverityExampleComponent } from './toast-severity-example.component';

describe('ToastSeverityExampleComponent', () => {
  let component: ToastSeverityExampleComponent;
  let fixture: ComponentFixture<ToastSeverityExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastSeverityExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastSeverityExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
