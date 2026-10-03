import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDetailComponent } from './feature-detail.component';
import { DynamicDialogConfig, DynamicDialogRef } from '@openng/optimus-ui/dynamicdialog';

describe('FeatureDetail', () => {
  let component: FeatureDetailComponent;
  let fixture: ComponentFixture<FeatureDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDetailComponent],
      providers: [
        { provide: DynamicDialogConfig, useValue: { data: {} } },
        { provide: DynamicDialogRef, useValue: { close: () => undefined } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
