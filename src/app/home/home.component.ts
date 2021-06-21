import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-small is-info m-auto">
  <div class="hero-body m-auto">
  <p class="title is-1 is-spaced">Tian</p>
  <figure class="image is-5by4">
    <img src="/assets/img/tianToon.png">
  </figure>
  <p class="subtitle is-3">Tian is an open source Digital Token</p>
  <div class="buttons">
  <button class="button is-primary">Get Started</button>
  <button class="button is-link">Github</button>
  
</div>
  </div>
</section>
  `,
  styles: [
    `
    .buttons{
     margin-left: 30%;
    }
    .title {
      margin-left: 36%;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
