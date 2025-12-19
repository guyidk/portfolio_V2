import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dynamicText: string = "";
  phrases: string[] = [
    "Fullstack Developer.",
    "Software Engineer.",
    "Backend Engineer.",
    "Software Developer.",
    "Code Enthusiast.",
    "Team Player.",
  ];

  certsList = [{
    img: "assets/images/aws-certified-cloud-practitioner.png", name: "AWS Certified Cloud Practitioner (CLF-C02)", issueDate: "Issued: Sep 2024 - Expires: Sep 2027", description: `Demonstrates foundational knowledge of AWS cloud concepts,
                  core services, security, pricing, and cloud computing best practices.`, link: "https://www.credly.com/badges/b2f3420d-69cc-4e9e-ba77-5e3743862460/linked_in_profile"
  },
  {
    img: "assets/images/Knime-Logo.png", name: "Basic Proficiency in KNIME Analytics Platform (L1)", issueDate: "Issued: Aug 2023", description: `Validates skills in data access, cleaning, transformation,
                  merging, visualization, and workflow automation using KNIME.`, link: "https://www.credly.com/badges/88f2e8cc-2a93-4f95-8efc-7a971373fa11/linked_in_profile"
  },
  {
    img: "assets/images/Python-institute-Logo.png", name: "OpenEDG Python Institute: Professional Certificate", issueDate: "Issued: Feb 2024", description: `Certifies proficiency in Python programming, including
                  syntax, data structures, object-oriented programming, and application development.`, link: "https://www.linkedin.com/learning/certificates/5cd86aea5aa40d10ef87ef1d560da4f432f00e36a256d83c131f055a1547ad32?u=76881922"
  },
  ]

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }

  onSubmit(form: any) {
    const { name, email, message } = form.value;

    const subject = `Email from ${name} – Portfolio Website`;

    const body = `${message}`;

    const mailtoLink =
      `mailto:rohithkousi@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }


}
