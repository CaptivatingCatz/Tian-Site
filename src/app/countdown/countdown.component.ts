import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `
  <section class="section">
  <h1 class="title">COUNTDOWN</h1>
  <h2 class="subtitle">
    Time until the next Tian Drop.
  </h2>
  <div class="box">
  <div class="columns">
  <div class="column is-three-quarters">
  <p id="demo"></p>
  </div>
  <div class="column">
  <figure class="image is-128x128">
  <img class="tianLogo" src="/assets/img/tianToon.png">
</figure>
  </div>
</div>
  
  
</div>
</section>
  `,
  styles: [
    `
    section {
      background-color: black;
    }
    section h1,h2 {
      color: white !important;
    }
    #demo {
      font-size: 8em;
    }
    .tianLogo {
      margin-top: 30%;
    }
    `
  ]
})
export class CountdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

}
