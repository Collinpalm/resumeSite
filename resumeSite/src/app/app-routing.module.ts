import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'contact-me', component: ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
