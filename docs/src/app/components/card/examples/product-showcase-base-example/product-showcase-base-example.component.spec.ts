import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductShowcaseBaseExampleComponent } from './product-showcase-base-example.component';

describe('ProductShowcaseBaseExampleComponent', () => {
  let component: ProductShowcaseBaseExampleComponent;
  let fixture: ComponentFixture<ProductShowcaseBaseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShowcaseBaseExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductShowcaseBaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
