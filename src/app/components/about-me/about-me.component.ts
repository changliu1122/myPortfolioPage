import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
