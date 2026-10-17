import { CardFeatureListConComponent } from './card-feature-list-con.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CardFeatureListConComponent', () => {
  let component: CardFeatureListConComponent;
  let fixture: ComponentFixture<CardFeatureListConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFeatureListConComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFeatureListConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
