import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopDialogWrapper } from './pop-dialog-wrapper';

describe('PopDialogWrapper', () => {
  let component: PopDialogWrapper;
  let fixture: ComponentFixture<PopDialogWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopDialogWrapper],
    }).compileComponents();

    fixture = TestBed.createComponent(PopDialogWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
