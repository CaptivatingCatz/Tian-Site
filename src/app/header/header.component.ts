import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-dark">
  <div class="navbar-brand">
    <a class="navbar-item">
       <img src="assets/img/tianLogo.png">
      </a>
    </div>

<!-- menu-->
<div class="navbar-menu">
<div class="navbar-end">
  <a class="navbar-item" routerLink="/">Home</a>
  <a class="navbar-item" href="../assets/pdf/Tian-WP-layout-v1.pdf">Whitepaper</a>
  <a class="navbar-item"> Roadmap </a>
  <a class="navbar-item" routerLink="/about">About</a>
  <a class="navbar-item" routerLink="/contact">Contact</a>
</div>
</div>
</div>


  `,
  styles: [`
  .navbar-item img{
    max-height: 4em;
  }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
