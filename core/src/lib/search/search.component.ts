import { Component, input } from '@angular/core';
import { SearchModel } from '../models';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';


@Component({
  selector: 'garuda-search',
  imports: [FormsModule, Button, InputText],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchConfig = input<SearchModel>();

  onSubmit(form: any) {
    const query = form.value.search;
    const url = `${this.searchConfig()?.searchEngineUrl}${encodeURIComponent(query)}`;
    window.open(url, '_blank'); // open in new tab
  }
}
