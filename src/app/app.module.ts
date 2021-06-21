import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { SocialsComponent } from './socials/socials.component';
import { CountdownComponent } from './countdown/countdown.component';
import { TTeamComponent } from './t-team/t-team.component';
import { ExploreTianComponent } from './explore-tian/explore-tian.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsletterComponent,
    FooterComponent,
    SocialsComponent,
    CountdownComponent,
    TTeamComponent,
    ExploreTianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
