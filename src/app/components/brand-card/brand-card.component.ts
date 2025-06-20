import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.css',
})
export class BrandCardComponent {
  @Input() brandName: string = '';
  @Input() logoUrl?: string;
}
