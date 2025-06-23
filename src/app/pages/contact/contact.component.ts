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
  shopImages = [
    {
      src: 'images/garet.jpeg',
      alt: 'Zvio Shop - გარე ხედი',
      title: 'ჩვენი მაღაზიის გარე ხედი',
    },
    {
      src: 'images/shignit1.jpeg',
      alt: 'Zvio Shop - შიდა ხედი',
      title: 'მაღაზიის შიდა ხედი - ბატარეების ასორტიმენტი',
    },
    {
      src: 'images/shignit2.jpeg',
      alt: 'Zvio Shop - შიდა ხედი',
      title: 'მაღაზიის შიდა ხედი - ბატარეების ასორტიმენტი',
    },
  ];

  contactInfo = {
    phone: '+995 555 777 518',
    phone2: '+995 555 263 031',
    phone3: '+995 593 190 107',
    address: 'თბილისი, დიდუბე, წერეთლის 59',
    coordinates: {
      lat: 41.732306,
      lng: 44.784944,
    },
    workingHours: {
      weekdays: '9:00 - 19:00',
      weekend: '9:00 - 19:00',
      note: 'ღია ვართ კვირის ყველა დღეს',
    },
  };

  getDirections() {
    const { lat, lng } = this.contactInfo.coordinates;
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.open(`geo:${lat},${lng}?q=${lat},${lng}`, '_blank');
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open(
        `http://maps.apple.com/?ll=${lat},${lng}&q=Battery Shop`,
        '_blank'
      );
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      window.open(url, '_blank');
    }
  }

  callBusiness(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_blank');
  }
}
