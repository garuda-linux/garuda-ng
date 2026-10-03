import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentSectionComponent } from './document-section.component';

describe('DocumentSectionComponent', () => {
  let component: DocumentSectionComponent;
  let fixture: ComponentFixture<DocumentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentSectionComponent);
    fixture.componentRef.setInput('sectionId', 'introduction');
    fixture.componentRef.setInput('heading', 'Introduction');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exposes its section id as DOM id and emits it on selection', () => {
    const emitted: string[] = [];
    component.sectionSelected.subscribe((id) => emitted.push(id));

    const element = fixture.nativeElement as HTMLElement;
    expect(element.id).toBe('introduction');
    element.querySelector<HTMLButtonElement>('button')?.click();

    expect(emitted).toEqual(['introduction']);
  });
});
