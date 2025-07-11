import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import * as AOS from 'aos';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Shadab Iqubal - Portfolio';


  constructor(private seoService: SeoService) {
    this.seoService.setSeoData(
      'Shadab Iqubal',
      'Explore the professional portfolio of Shadab Iqubal – a passionate web developer. Check out skills, projects, and ways to connect.',
      ['Shadab Iqubal', 'Full Stack Web Developer', 'portfolio', 'web developer', 'Angular', 'frontend','backend','.Net Core','dotnet']
    );
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

}
