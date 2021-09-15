import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outro',
  template: `
    <section class="hero is-success">
  <div class="hero-body">
    <p class="title">
      Wu Wei With Tian

    </p>
    <div class="columns">
  <div class="column is-half">is-half</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>
  </div>
</section>
  `,
  styles: [
  ]
})
export class OutroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
