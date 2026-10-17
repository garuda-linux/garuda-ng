import { Component, OnInit, input, model } from '@angular/core';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@openng/optimus-ui/tabs';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'garuda-docs-code-example',
  imports: [Tabs, TabList, Tab, TabPanels, TabPanel, Highlight],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
})
export class CodeExampleComponent implements OnInit {
  readonly html = input<string | undefined>();
  readonly ts = input<string | undefined>();
  readonly scss = input<string | undefined>();

  readonly tabId = model<string>('0');

  ngOnInit(): void {
    // Only pre-select tab 0 when it exists; pages may pass just a single language.
    if (this.tabId() !== '0' || this.html() !== undefined) return;
    this.tabId.set(this.ts() === undefined ? '2' : '1');
  }
}
