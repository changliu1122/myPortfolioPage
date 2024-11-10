import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import { CommonModule } from '@angular/common';  // Add this import
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,CommonModule, MatChipsModule,MatGridListModule,MatCardModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  techStack = [
    { name: 'Javascript', icon: 'assets/icons/javascript.svg' },
    { name: 'Postman', icon: 'assets/icons/postman-icon.svg' },
    { name: 'Typescript', icon: 'assets/icons/typescript.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'CSS', icon: 'assets/icons/css3.svg' }
  ];
}
