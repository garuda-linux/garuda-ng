import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'garuda-docs-code-example',
  imports: [CommonModule, Tabs, TabList, Tab, TabPanels, TabPanel, Highlight],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
})
export class CodeExampleComponent {
  html = input<string | undefined>();
  ts = input<string | undefined>();
  scss = input<string | undefined>();
}
