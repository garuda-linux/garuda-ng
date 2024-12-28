import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellBarEndExampleComponent } from './shell-bar-end-example.component';

describe('ShellBarEndExampleComponent', () => {
  let component: ShellBarEndExampleComponent;
  let fixture: ComponentFixture<ShellBarEndExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellBarEndExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellBarEndExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
