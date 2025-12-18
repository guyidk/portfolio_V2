import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  certificates = [
    {
      title: 'AWS Cloud Practitioner',
      description: 'Foundational AWS cloud certification covering core services.',
      imageUrl: 'assets/aws.jpg',
      link: 'assets/images/poly_grades&CCA.png'
    },
    {
      title: 'Angular Advanced',
      description: 'Advanced Angular concepts, RxJS, and architecture patterns.',
      imageUrl: 'assets/angular.jpg',
      link: 'assets/images/poly_grades&CCA.png'
    }
  ];
}
