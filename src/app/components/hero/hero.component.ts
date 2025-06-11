import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent  implements OnInit {
  typedText: string = '';
  private texts: string[] = ['Angular Developer', 'Dotnet Core Developer', 'Full Stack Developer'];
  private currentIndex: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 100;
  private deletingSpeed: number = 50;
  private pauseDuration: number = 2000;

  ngOnInit(): void {
    this.type();
  }

  private type(): void {
    const currentText = this.texts[this.currentIndex];
    
    if (this.isDeleting) {
      this.typedText = currentText.substring(0, this.typedText.length - 1);
    } else {
      this.typedText = currentText.substring(0, this.typedText.length + 1);
    }

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.typedText === currentText) {
      typeSpeed = this.pauseDuration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.typedText === '') {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
