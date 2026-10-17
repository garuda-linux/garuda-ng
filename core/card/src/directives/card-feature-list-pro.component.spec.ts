import { CardFeatureListProComponent } from './card-feature-list-pro.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CardFeatureListConComponent', () => {
  let component: CardFeatureListProComponent;
  let fixture: ComponentFixture<CardFeatureListProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFeatureListProComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFeatureListProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
