import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <!-- Header -->
    <app-header></app-header>
    <!-- Home Component -->
    <app-home></app-home>
    <!-- Newsletter Component -->
    <app-newsletter></app-newsletter>
    <!-- Routes get Injected here -->
    <router-outlet></router-outlet>
     <!-- Drop Countdown -->
     <app-countdown></app-countdown>
     <!-- T-Team Component -->
     <app-t-team></app-t-team>
     <!-- Explore Tian Unimplemented -->
     <app-explore-tian></app-explore-tian>
    <!-- Socials -->
    <app-socials></app-socials>
    <!-- Footer Component -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Tian-Site';
}
