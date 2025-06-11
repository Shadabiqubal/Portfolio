import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
 activeFilter = 'all';
  
  filters = [
    { id: 'all', label: 'All' },
    { id: 'angular', label: 'Angular' },
    // { id: 'react', label: 'React' },
    { id: 'fullstack', label: 'Full Stack' },
    // { id: 'ui', label: 'UI/UX' }
  ];
  
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart, and checkout.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'project1.avif',
      liveUrl: '#',
      codeUrl: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality.',
      tags: ['Angular', 'Firebase', 'RxJS', 'Material'],
      image: 'project2.avif',
      liveUrl: '#',
      codeUrl: '#',
      category: 'angular'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with interactive charts.',
      tags: ['React', 'Chart.js', 'Styled Components'],
      image: 'project3.avif',
      liveUrl: '#',
      codeUrl: '#',
      category: 'react'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design.',
      tags: ['HTML', 'SCSS', 'JavaScript', 'GSAP'],
      image: 'project4.avif',
      liveUrl: '#',
      codeUrl: '#',
      category: 'ui'
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'Real-time weather application with location detection and forecasts.',
      tags: ['Angular', 'OpenWeather API', 'Geolocation'],
      image: 'project5.avif',
      liveUrl: '#',
      codeUrl: '#',
      category: 'angular'
    },
    {
      id: 6,
      title: 'UI Component Library',
      description: 'Custom UI component library built with Storybook and Angular.',
      tags: ['Angular', 'Storybook', 'SCSS'],
      image: 'project6.avif',
      liveUrl: '#',
      codeUrl: '#',
      category: 'ui'
    }
  ];
  
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }
}
