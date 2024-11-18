import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    standalone: true, 
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() imageSrc: string = ''; // Image source
    @Input() imageAlt: string = ''; // Alt text for the image
    @Input() title: string = ''; // Title of the card
    @Input() subtitle: string = ''; // Subtitle of the card
    @Input() content: string = ''; // Content of the card
}
