import { Component, input, model } from '@angular/core';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'garuda-docs-code-example',
  imports: [Tabs, TabList, Tab, TabPanels, TabPanel, Highlight],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
})
export class CodeExampleComponent {
  html = input<string | undefined>();
  ts = input<string | undefined>();
  scss = input<string | undefined>();

  tabId = model<string>('0');
}
