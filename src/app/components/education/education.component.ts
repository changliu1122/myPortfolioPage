import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatButtonModule,  
    MatStepperModule,
    MatIconModule,
    CardComponent
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  
  @ViewChild('stepper') stepper!: MatStepper;

  ngAfterViewInit() {
    // Wait for view to be fully initialized
    setTimeout(() => {
      // Open all steps
      for(let i = 0; i < this.stepper._steps.length; i++) {
        this.stepper.selected = this.stepper._steps.get(i);
      }
    });
  }
}
