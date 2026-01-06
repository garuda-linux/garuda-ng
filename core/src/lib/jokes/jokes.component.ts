import { Component, input, OnInit } from '@angular/core';
import { JokesModel } from '../models';

@Component({
  selector: 'garuda-jokes',
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.scss',
})
export class JokesComponent implements OnInit {
  jokes = input<JokesModel>();
  activeJoke: string | undefined;
  length: any = 0;
  index: any = 0;

  ngOnInit() {
    const jokesValue = this.jokes();
    this.length = jokesValue?.jokes?.length ?? 0;
    if (this.length > 0) {
      this.activeJoke = jokesValue?.jokes[this.index];
    }
  }

  setJoke(): void {
    if (this.length > 0) {
      this.index = this.index + 1;
      this.activeJoke = this.jokes()?.jokes[this.index % this.length];
    }
  }
}
