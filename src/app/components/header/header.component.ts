import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Shadab_Iqubal_Resume.pdf'; // Desired download file name
    link.click();
  }
}
