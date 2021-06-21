import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer is-dark">
  <div class="container content has-text-centered">
  <p>Copyright @ Chaotic Night Studios 2021</p>
  <p>Created by CaptivatingCatz and GiverofMemory</p>
  </div>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
