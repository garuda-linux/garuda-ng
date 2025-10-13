import { Component, input } from '@angular/core';

@Component({
  selector: 'garuda-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  /**
   * Title text to be displayed prominently. This is a required field.
   */
  title = input.required<string>();

  /**
   * Subtitle text to be displayed below the title. Use this for plain text subtitles.
   * Cannot be used together with `subtitleHtml`.
   */
  subtitle = input<string>();

  /**
   * HTML content for the subtitle. Use this if you need to include HTML tags in the subtitle.
   * Cannot be used together with `subtitle`.
   */
  subtitleHtml = input<string>();
}
