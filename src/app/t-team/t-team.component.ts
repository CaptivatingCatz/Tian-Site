import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-team',
  template: `
  <section class="hero is-danger">
  <div class="hero-body">
    <p class="title">
      Meet the T-Team
    </p>
    <div class="columns">
  <div class="column">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4 Org">CaptivatingCatz</p>
        <p class="subtitle is-6 Org">Developer And Executive of Tian</p>
      </div>
    </div>

    <div class="content">
    Catz is a Computer Scientist, Web Designer, content creator, musician and leader.
    Catz runs Chaotic Night Studios and CaptivatingCatz.com and has a passion for Music, Art, and NFT’s.
    <p><br><br></p>
    <button class="button is-dark"><a href="https://www.captivatingcatz.com">CaptivatingCatz.com</a></button>
      <br>
    </div>
  </div>
</div>
  </div>
  <div class="column">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4 Org">PlantBaby</p>
        <p class="subtitle is-6 Org">Art Designer and Hype man of Tian</p>
      </div>
    </div>

    <div class="content">
    PlantBaby has a background in as an advertising agencey Art Director, is an
    avid Vegan, a believer in humanity, a giver of Good Energy
    <p><br><br><br></p>
    <button class="button is-dark"><a href="#">Plant Baby</a></button>
      <br>
    </div>
  </div>
</div>
  </div>
  <div class="column">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4 Org">Mercy</p>
        <p class="subtitle is-6 Org">Web Host and Back-end Operator for Tian</p>
      </div>
    </div>

    <div class="content">
    Mercy is an IT
    expert and web developer and runs Aossome.com
    <p><br><br><br><br></p>
    <button class="button is-dark"><a href="https://www.aossome.com">Aossome.com</a></button>
      <br>
    </div>
  </div>
</div>
  </div>
  <div class="column">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4 Org">GiverOfMemory</p>
        <p class="subtitle is-6 Org">Designer and Technologist of Tian</p>
      </div>
    </div>

    <div class="content">
    Giver is a
    multidisciplinary designer with Degrees in Nutrition and
    Mechanical Engineering; with expertise and innovative
    designs in Biology, Physics, Chemistry, and of course,
    Cryptocurrency. Giver runs NatureVault.org and has a
    passion for cheese
    <p><br></p>
    <button class="button is-dark"><a href="https://www.Naturevault.org">Nature Vault</a></button>
      <br>
    </div>
  </div>
</div>
  </div>
</div>
  </div>
</section>
  `,
  styles: [
    `
    .Org {
      color: black !important;
    }
    .subtitle {
      color: black;
    }
    `
  ]
})
export class TTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
