import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
stats = [
    { value: 3, label: 'Years Experience' },
    { value: 5, label: 'Projects Completed' },
    { value: 2, label: 'Happy Clients' },
    // { value: 1, label: 'Certifications' }
    { value: 10, label: 'Awards Won' }
  ];
}
