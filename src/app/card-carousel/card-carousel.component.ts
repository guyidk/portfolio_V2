import {
  Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-carousel',
  standalone: false,
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements AfterViewInit, OnDestroy {

  certsList = [{img:"assets/images/aws-certified-cloud-practitioner.png",name:"AWS Certified Cloud Practitioner (CLF-C02)", issueDate:"Issued: Sep 2024 - Expires: Sep 2027", description:`Demonstrates foundational knowledge of AWS cloud concepts,
                  core services, security, pricing, and cloud computing best practices.`, link:"https://www.credly.com/badges/b2f3420d-69cc-4e9e-ba77-5e3743862460/linked_in_profile"},
            {img:"assets/images/Knime-Logo.png",name:"Basic Proficiency in KNIME Analytics Platform (L1)", issueDate:"Issued: Aug 2023", description:`Validates skills in data access, cleaning, transformation,
                  merging, visualization, and workflow automation using KNIME.`, link:"https://www.credly.com/badges/88f2e8cc-2a93-4f95-8efc-7a971373fa11/linked_in_profile"},
                              {img:"assets/images/Python-institute-Logo.png",name:"OpenEDG Python Institute: Professional Certificate", issueDate:"Issued: Feb 2024", description:`Certifies proficiency in Python programming, including
                  syntax, data structures, object-oriented programming, and application development.`, link:"https://www.linkedin.com/learning/certificates/5cd86aea5aa40d10ef87ef1d560da4f432f00e36a256d83c131f055a1547ad32?u=76881922"},
            ]

  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  private autoScrollInterval!: number;
  private scrollAmount = 320; // card width + gap
  private cardWidth = 320; // 300px card + 20px gap

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll(): void {
    this.stopAutoScroll();

    this.autoScrollInterval = window.setInterval(() => {
      const el = this.carousel.nativeElement;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        this.scrollBy(this.cardWidth);
      }
    }, 3000); // slower = smoother feel
  }


  stopAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  scrollNext(): void {
    this.scrollBy(this.cardWidth);
  }

  scrollPrev(): void {
    this.scrollBy(-this.cardWidth);
  }

  private scrollBy(amount: number): void {
    if (!this.carousel) return;

    this.carousel.nativeElement.scrollBy({
      left: amount,
      behavior: 'smooth',
    });
  }

}