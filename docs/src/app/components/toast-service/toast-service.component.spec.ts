import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastServiceComponent } from './toast-service.component';

describe('ToastServiceComponent', () => {
  let component: ToastServiceComponent;
  let fixture: ComponentFixture<ToastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
