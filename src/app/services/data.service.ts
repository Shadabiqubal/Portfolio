import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Project } from '../models/project';
import { Experience } from '../models/experience';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class DataService {
getSummary(): string {
    return `Dynamic and detail-oriented Full Stack Developer with a proven track record in designing and implementing scalable web applications. Proficient in backend technologies like RESTful Dotnet Core Web API and Microsoft SQL Server, as well as frontend frameworks like Angular and Bootstrap. Committed to continuous learning and leveraging technical expertise to drive impactful results for organizations.`;
  }

  getEducations(): Education[] {
    return [
      {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'Integral University, Lucknow',
        duration: 'June 2019 – June 2023',
        score: '9.2/10 GPA'
      },
      {
        degree: 'Intermediate of Science',
        institution: 'Jesus & Mary Academy',
        duration: 'June 2016 – June 2018',
        score: '71.6%'
      },
      {
        degree: 'Matriculation',
        institution: 'Jesus & Mary Academy',
        duration: 'June 2015 – June 2016',
        score: '9.6/10 GPA'
      }
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Full Stack Developer',
        company: 'ProtaTECH',
        duration: 'Jan 2023 - Present',
        responsibilities: [
          'Developed robust Dotnet Core Web APIs, improving backend efficiency by 15%',
          'Leveraged Microsoft SQL Server for effective data management and optimized database performance',
          'Built and maintained dynamic user interfaces using Angular and Bootstrap, enhancing user experience',
          'Collaborated with cross-functional teams, ensuring seamless integration and delivery of high-quality features'
        ]
      },
      {
        role: 'Security Officer Regulation Training (SORT)',
        company: '',
        duration: 'Jun 2023 - Feb 2024',
        responsibilities: [
          'Contributed to the development of a US-based website offering courses for security guard training',
          'Integrated secure payment gateways for online course purchases'
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'Social Media Application Development',
        duration: 'Jan 2023 - Jun 2023',
        description: [
          'Designed and implemented a scalable backend using Dotnet Core Web API and Microsoft SQL Server',
          'Enhanced user experience by developing responsive UI components using Angular',
          'Improved project outcomes through collaborative team efforts'
        ]
      },
      {
        title: 'Medical Appointment Management System',
        duration: 'Feb 2024 - Present',
        description: [
          'Designed and developed backend APIs using Dotnet Core Web API',
          'Implemented JWT-based authentication for secure login and role-based access control'
        ]
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', category: 'frontend' },
      { name: 'Bootstrap', category: 'frontend' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'CSS', category: 'frontend' },
      { name: 'HTML5', category: 'frontend' },
      { name: 'Dotnet Core Web API', category: 'backend' },
      { name: 'Microsoft SQL Server', category: 'backend' },
      { name: 'Node Js', category: 'backend' },
      { name: 'MySql', category: 'backend' },
      { name: 'PostgreSQL', category: 'backend' },
      { name: 'MongoDB', category: 'backend' },
      { name: 'C#', category: 'backend' }
    ];
  }

  getContactInfo() {
    return {
      phone: '(+91) 8877238943',
      email: 'shadabiqbal61@gmail.com',
      linkedin: 'linkedIn.com/in/shadab-iqubal'
    };
  }
}
