import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule,HeroComponent,AboutComponent,SkillsComponent,ProjectsComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
