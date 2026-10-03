import { TestBed } from '@angular/core/testing';
import { ShellBarDropdownToggleDirective } from './shell-bar-dropdown-toggle.directive';

describe('ShellBarDropdownToggleDirective', () => {
  it('should create an instance', () => {
    const directive = TestBed.runInInjectionContext(() => new ShellBarDropdownToggleDirective());
    expect(directive).toBeTruthy();
  });
});
