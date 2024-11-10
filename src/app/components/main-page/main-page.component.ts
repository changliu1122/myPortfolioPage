import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  navigationButtons = [
    { section: 'education-section', icon: 'school' },
    { section: 'work-experience-section', icon: 'apartment' },
    { section: 'project-section', icon: 'terminal' },
    { section: 'tech-stack-section', icon: 'build' },
    { section: 'about-me-section', icon: 'person' }
  ];

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  changeLanguage(language: string): void {
    console.log(language);
  }
}
