import { Component, Input } from '@angular/core';
import { SearchModel } from '../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'garuda-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() searchConfig: SearchModel | undefined;

  onSubmit(form: any) {
    const query = form.value.search;
    const url = `${this.searchConfig?.searchEngineUrl}${encodeURIComponent(query)}`;
    window.open(url, '_blank'); // open in new tab
  }
}
