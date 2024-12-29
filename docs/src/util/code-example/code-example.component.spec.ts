import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeExampleComponent } from './code-example.component';

describe('CodeExampleComponent', () => {
  let component: CodeExampleComponent;
  let fixture: ComponentFixture<CodeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
