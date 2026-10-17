import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    fixture.componentRef.setInput('title', '404');
    fixture.componentRef.setInput('subtitle', 'You found a black hole! 👾');
    fixture.detectChanges();
  });

  it('renders the title as a heading and the subtitle as text', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('404');
    expect(element.textContent).toContain('You found a black hole! 👾');
  });

  it('supports lower heading levels', () => {
    fixture.componentRef.setInput('level', 'h3');
    fixture.componentRef.setInput('title', 'Details');
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('h3')?.textContent).toContain('Details');
  });
});
