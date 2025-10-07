import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemingComponent } from './theming.component';

describe('Theming', () => {
  let component: ThemingComponent;
  let fixture: ComponentFixture<ThemingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
