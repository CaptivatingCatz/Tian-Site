import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  template: `
  <section class="hero is-warning is-halfheight">
  <div class="hero-body">
    <div class="columns is-vcentered">
    <div class="column is-9">
      <p class=" title bd-notification is-primary">
      Join The Community Newletter!
     </p>
     <p class="subtitle">
        Get an inside look at the process of development, Tian opportunities and so much more.
      </p>
    </div>
    <div class="column is-three-quarters">

      <form (ngSubmit)="submitForm()" #contactForm="ngForm">
      
     
      <div class="field">
      <label class="label"> Email</label>
      <input 
      type="email" 
      name="email" 
      class="input" 
      [(ngModel)]="email" #emailInput="ngModel" required >
      <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
      Your Email is required and needs to be in the format of a valid email.
      </div>
      </div>
        <!-- submit button -->
       <button type="submit" class="button is-large is-success" [disabled]="contactForm.invalid"> Subscribe! </button> 
       </form>

      
    </div>
  </div>
    
  </div>
</section>
  `,
  styles: [
    `
    
.hero {
  background-image: url('/assets/img/cherryBlossom.png');
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  height: 600px;
  background-position: center right;
}
    `
  ]
})
export class NewsletterComponent implements OnInit {
  email: any;
  constructor() { }

  ngOnInit(): void {
  }


  submitForm() {
    const message = `My Email is ${this.email}. Thanks for Joining The Email`;
   alert(message);
  }
}
