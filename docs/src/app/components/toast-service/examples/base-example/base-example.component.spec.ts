import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseExampleComponent } from './base-example.component';

describe('BaseExampleComponent', () => {
  let component: BaseExampleComponent;
  let fixture: ComponentFixture<BaseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
