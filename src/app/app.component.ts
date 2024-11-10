import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this import
import { RouterOutlet } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {EducationComponent} from "./components/education/education.component";
import {WorkingExperienceComponent} from "./components/working-experience/working-experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {TechStackComponent} from "./components/tech-stack/tech-stack.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MainPageComponent,AboutMeComponent,EducationComponent,TechStackComponent,WorkingExperienceComponent,ProjectsComponent,MatGridListModule,MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule], //import the class name , not file name
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  showScrollButton = true;
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.showScrollButton = window.scrollY > 200;
    });
  }
  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
