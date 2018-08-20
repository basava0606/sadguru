import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SaiComponent} from './sai/sai.component';
import { ShankarComponent } from './shankar/shankar.component';
import { BhajanComponent } from './bhajan/bhajan.component';
import { StoryComponent } from './story/story.component';
import { BiographyComponent } from './biography/biography.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GodComponent } from './god/god.component';
import { QuoteComponent  } from './quote/quote.component';
import { PeopleInvolvedComponent } from './people-involved/people-involved.component';
import { TeachingsComponent } from './teachings/teachings.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path:'', component: SaiComponent},
  { path:'admin', component: ShankarComponent},
  { path:'bhajan', component: BhajanComponent},
  { path:'biography', component: BiographyComponent },
  { path:'blog', component: BlogComponent},
  { path:'gallery', component: GalleryComponent},
  { path:'god', component: GodComponent},
  { path:'quote', component: QuoteComponent},
  { path:'story', component: StoryComponent},
  { path:'people-involved', component: PeopleInvolvedComponent},
  { path:'teaching', component: TeachingsComponent},
  { path:'publication', component: PublicationComponent},
  { path:'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
