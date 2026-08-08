import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupWrapperComponent } from './pop-dialog-wrapper';
import { DynamicDialogConfig, DynamicDialogRef } from '@openng/optimus-ui/dynamicdialog';

describe('PopDialogWrapper', () => {
  let component: PopupWrapperComponent;
  let fixture: ComponentFixture<PopupWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupWrapperComponent],
      providers: [
        { provide: DynamicDialogConfig, useValue: {} },
        { provide: DynamicDialogRef, useValue: { close: () => undefined } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
