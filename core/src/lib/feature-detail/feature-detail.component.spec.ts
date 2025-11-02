import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDetailComponent } from './feature-detail.component';

describe('FeatureDetail', () => {
  let component: FeatureDetailComponent;
  let fixture: ComponentFixture<FeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
