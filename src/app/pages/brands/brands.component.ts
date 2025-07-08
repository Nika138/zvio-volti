import { Component, OnInit } from '@angular/core';
import { BrandCardComponent } from '../../components/brand-card/brand-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [BrandCardComponent, CommonModule, RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Zvio Shop | ბრენდები');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'იხილეთ Zvioshop-ში არსებული ბატარეების ბრენდები, როგორიცაა Bosch, Varta, Mutlu და სხვა.',
      },
      {
        name: 'keywords',
        content: 'ბატარეების ბრენდები, Bosch, Varta, Mutlu, zvio shop',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Zvio Shop | ბრენდები' },
      {
        property: 'og:description',
        content: 'Bosch, Varta, Mutlu და სხვა ბრენდები Zvioshop-ში.',
      },
      {
        property: 'og:image',
        content: 'https://zvioshop.store/assets/brands-preview.jpg',
      },
      { property: 'og:url', content: 'https://zvioshop.store/brands' },
    ]);
  }

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
