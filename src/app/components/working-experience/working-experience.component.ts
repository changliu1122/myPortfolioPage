import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-working-experience',
  standalone: true,
  imports: [MatIconModule, MatStepperModule,CardComponent],
  templateUrl: './working-experience.component.html',
  styleUrl: './working-experience.component.css'
})
export class WorkingExperienceComponent {

}
