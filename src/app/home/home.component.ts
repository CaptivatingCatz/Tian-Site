import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-small is-info m-auto">
  <div class="hero-body m-auto">
  <div class="columns">
  <div class="column is-half">
  <br>
  <br>
  <p class="title tian-top">Fair. Elegant. Transparent.</p>
  <p class="subtitle">Tian is a new type of money, a formulaic stablecoin. <br> The price is un-pegged but stablized based on trading volume.</p>
  <br>
 <p class="title smaller"><u>Price Ticker</u></p>
 <div class="columns">
  <div class="column">
    <p class="move">Price:</p>
    <p class="move">Market Cap:</p>
    <p class="move">Target:</p>
  </div>
  <div class="column">
  <div class="box adjust">  $0.000 </div>       <!-- replace with variable -->
  <div class="box adjust">  $0.00 </div><!-- replace with variable -->
  <div class="box adjust">  $0.00 </div><!-- replace with variable -->
  </div>
</div>

 <div class="buttons">
  <button class="button is-primary">Get Started</button>
  <button class="button is-link">Github</button>
</div>
  </div>
  <div class="column is-half">
  <figure class="image is-hero">
  <img class="is-hero" src="../../assets/img/tian-showcase.png">
</figure>
  </div>
</div>
  </div>
</section>
  `,
  styles: [
    `
    .buttons{
     margin-left: 55%;
    }
    .m-auto{
      margin: 0 !important;
    }
    p {
      margin-left: 20%;
    }
    .is-hero{
      margin-top: 30px;
      margin-left: 15%;
      max-height: 500px;
      width: 500px;
    }
    .smaller {
      font-size: 1.5em;
    }
    .move {
      margin-left: 40%;
      margin-top: 12px;
      padding-bottom: 50px;
      font-size: 1.35em;
    }
    .adjust{
      margin-left: -140px;
      font-size: 1.2em;
    }
    .tian-top{
      font-size: 3em;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
