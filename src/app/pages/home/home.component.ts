import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Zvio Shop | ავტობატარეების მაღაზია');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'ავტობატარეები მაღალი ხარისხით და გარანტიით, უფასო დაყენება, სწრაფი მიწოდება თბილისში.',
      },
      {
        name: 'keywords',
        content:
          'ავტობატარეა, ავტობატარეები, მაღაზია, თბილისი, zvio shop, მანქანის ბატარეა',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Zvio Shop | ავტობატარეების მაღაზია' },
      {
        property: 'og:description',
        content: 'ხარისხიანი ავტობატარეები ადგილზე დაყენებით თბილისში.',
      },
      {
        property: 'og:image',
        content: 'https://zvioshop.store/assets/preview.jpg',
      },
      { property: 'og:url', content: 'https://zvioshop.store/' },
    ]);
  }
}
