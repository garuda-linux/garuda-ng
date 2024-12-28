import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellBarStartExampleComponent } from './shell-bar-start-example.component';

describe('ShellBarStartExampleComponent', () => {
  let component: ShellBarStartExampleComponent;
  let fixture: ComponentFixture<ShellBarStartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellBarStartExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellBarStartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
