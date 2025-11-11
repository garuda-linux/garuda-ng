import { Component, Input, OnInit } from '@angular/core';
import { JokesModel } from '../models';

@Component({
  selector: 'garuda-jokes',
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.scss',
})
export class JokesComponent implements OnInit {
  @Input() jokes: JokesModel | undefined;
  activeJoke: string | undefined;
  length: any = 0;
  index: any = 0;

  ngOnInit() {
    this.length = this.jokes?.jokes && this.jokes?.jokes?.length;
    if(this.jokes?.jokes && this.jokes?.jokes?.length > 0) {
      this.activeJoke = this.jokes?.jokes[this.index];
    }
  }

  setJoke(): void {
    if(this.jokes?.jokes && this.jokes?.jokes?.length > 0) {
      this.index = this.index + 1;
      this.activeJoke = this.jokes?.jokes[this.index % this.length];
    }
  }

}
