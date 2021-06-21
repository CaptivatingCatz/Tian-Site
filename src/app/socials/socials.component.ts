import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  template: `
  <section class="hero is-dark">
  <div class="hero-body">
  <div class="columns">

  <div class="column is-3">
  <button class="button is-light">Get Involved</button>
  </div>
  <div class="column is-6">
    
  <div class="columns">
  <div class="column">
    
<figure class="image is-64x64">
<a href="#"><img src="../assets/img/icons/twitter.png" alt="Image"></a>
</figure>
  </div>
  <div class="column">
  <figure class="image is-64x64">
  <a href="#"><img src="../assets/img/icons/facebook.png" alt="Image"></a>
</figure>
  </div>
  <div class="column">
  <figure class="image is-64x64">
  <a href="#"><img src="../assets/img/icons/tiktok.png" alt="Image"></a>
</figure>
  </div>
  <div class="column">
  <figure class="image is-64x64">
  <a href="#"><img src="../assets/img/icons/discord.png" alt="Image"></a>
</figure>
  </div>
</div>



  </div>
  
  <div class="column is-3">
  <figure class="image is-128x128">
  <a href="#"> <img src="../assets/img/icons/youtube.png" alt="Image"> </a>
</figure>
  </div>
</div>
  </div>
</section>
  `,
  styles: [`
  
  `
  ]
})
export class SocialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
