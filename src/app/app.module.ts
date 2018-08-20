import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SaiComponent } from './sai/sai.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShankarComponent } from './shankar/shankar.component';
import { BhajanComponent } from './bhajan/bhajan.component';
import { StoryComponent } from './story/story.component';
import { BiographyComponent } from './biography/biography.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GodComponent } from './god/god.component';
import { QuoteComponent } from './quote/quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleInvolvedComponent } from './people-involved/people-involved.component';
import { TeachingsComponent } from './teachings/teachings.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SaiComponent,
    ShankarComponent,
    BhajanComponent,
    StoryComponent,
    BiographyComponent,
    BlogComponent,
    GalleryComponent,
    GodComponent,
    QuoteComponent,
    NavbarComponent,
    FooterComponent,
    PeopleInvolvedComponent,
    TeachingsComponent,
    PublicationComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
