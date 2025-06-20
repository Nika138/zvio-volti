import { Component } from '@angular/core';
import { BrandCardComponent } from '../../components/brand-card/brand-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [BrandCardComponent, CommonModule, RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  brands = [
    { name: 'Duracell', logo: 'images/duracell-logo.png' },
    { name: 'Varta', logo: 'images/varta-logo.jpg' },
    { name: 'Mutlu', logo: 'images/mutlu-logo.jpg' },
    { name: 'Energizer', logo: 'images/energizer-logo.png' },
    { name: 'Takasaki', logo: 'images/takasaki-logo.jpg' },
    { name: 'Urban', logo: 'images/urban-logo.png' },
    { name: 'American', logo: 'images/american-logo.png' },
    { name: 'Yigit Aku', logo: 'images/yigitaku-logo.png' },
    { name: 'Platin', logo: 'images/platin-logo.png' },
    { name: 'Macpower', logo: 'images/macpower-logo.png' },
  ];
}
