import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experiences:any;
  
  constructor(private dataService: DataService) {
    this.experiences = this.dataService.getExperiences();
  }
}
