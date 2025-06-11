import { Component } from '@angular/core';
import { Skill } from '../../models/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  activeTab = 'frontend';
  
  tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];
  
  frontendSkills: Skill[] = [
    { name: 'Angular', level: 95, icon: 'angular.svg' },
    { name: 'TypeScript', level: 90, icon: 'typescript.svg' },
    { name: 'JavaScript', level: 85, icon: 'javascript.svg' },
    { name: 'HTML5', level: 95, icon: 'html.svg' },
    { name: 'CSS3', level: 90, icon: 'css.svg' },
    { name: 'RxJS', level: 80, icon: 'rxjs.svg' },
    // { name: 'React', level: 70, icon: 'react.svg' },
    // { name: 'UI/UX Design', level: 75, icon: 'figma.svg' }
  ];
  
  backendSkills: Skill[] = [
    { name: '.NET Core', level: 65, icon: 'NET core.svg' },
    { name: 'SQL Server', level: 80 , icon: 'sqlserver.svg' },
    { name: 'Node.js', level: 80, icon: 'nodejs.svg' },
    { name: 'Express', level: 75, icon: 'express.svg' },
    { name: 'MongoDB', level: 70, icon: 'mongodb.svg' },
    { name: 'Firebase', level: 75, icon: 'firebase.svg' },
    { name: 'REST API', level: 85, icon: 'api.svg' },
  ];
  
  tools: Skill[] = [
    { name: 'VS Code', level: 95, icon: 'vscode.svg' },
    { name: 'Visual Studio', level: 95, icon: 'visual-studio.svg' },
    { name: 'SQL Server', level: 90, icon: 'sqlserver.webp' },
    { name: 'Postman', level: 90, icon: 'postman.svg' },
    { name: 'Git', level: 85, icon: 'git.svg' },
    { name: 'Docker', level: 70, icon: 'docker.svg' },
    { name: 'NPM', level: 90, icon: 'npm.svg' },
    // { name: 'Jira', level: 80, icon: 'jira.svg' },
    // { name: 'Webpack', level: 75, icon: 'webpack.svg' },
  ];
}
