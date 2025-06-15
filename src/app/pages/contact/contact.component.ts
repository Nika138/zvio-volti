import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // Shop images - replace with your actual image paths
  shopImages = [
    {
      src: 'assets/images/shop-exterior.jpg', // Replace with your image path
      alt: 'Zvio Shop - გარე ხედი',
      title: 'ჩვენი მაღაზიის გარე ხედი',
    },
    {
      src: 'assets/images/shop-interior.jpg', // Replace with your image path
      alt: 'Zvio Shop - შიდა ხედი',
      title: 'მაღაზიის შიდა ხედი - ბატარეების ასორტიმენტი',
    },
    {
      src: 'assets/images/shop-service.jpg', // Replace with your image path
      alt: 'Zvio Shop - სერვისი',
      title: 'ბატარეის დაყენების სერვისი',
    },
  ];

  contactInfo = {
    phone: '+995 555 777 518',
    phone2: '+995 555 263 031',
    phone3: '+995 593 190 107',
    address: 'თბილისი, საქართველო',
    workingHours: {
      weekdays: '10:00 - 19:00',
      weekend: '10:00 - 19:00',
      note: 'ღია ვართ კვირის ყველა დღეს',
    },
  };
}
