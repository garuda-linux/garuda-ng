import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellBarAlwaysDropdownExampleComponent } from './shell-bar-always-dropdown-example.component';

describe('ShellBarAlwaysDropdownExampleComponent', () => {
  let component: ShellBarAlwaysDropdownExampleComponent;
  let fixture: ComponentFixture<ShellBarAlwaysDropdownExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellBarAlwaysDropdownExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellBarAlwaysDropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
