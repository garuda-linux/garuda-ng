import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastServiceComponent } from './toast-service.component';
import { RouterModule } from '@angular/router';

describe('ToastServiceComponent', () => {
  let component: ToastServiceComponent;
  let fixture: ComponentFixture<ToastServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastServiceComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
