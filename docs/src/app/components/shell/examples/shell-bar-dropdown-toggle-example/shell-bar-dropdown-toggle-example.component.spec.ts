import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellBarDropdownToggleExampleComponent } from './shell-bar-dropdown-toggle-example.component';

describe('ShellBarDropdownToggleExampleComponent', () => {
  let component: ShellBarDropdownToggleExampleComponent;
  let fixture: ComponentFixture<ShellBarDropdownToggleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellBarDropdownToggleExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellBarDropdownToggleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
