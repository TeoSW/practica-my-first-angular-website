import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobListings = [
    { title: 'Sushi Chef', description: 'Experienced sushi chef with a passion for traditional and modern techniques. Must have at least 5 years of experience in a high-end restaurant.' },
    { title: 'Waitstaff', description: 'Friendly and professional waitstaff needed for both part-time and full-time positions. Previous experience preferred but not required.' },
    { title: 'Kitchen Assistant', description: 'Assist in the preparation and plating of dishes. Must be able to work in a fast-paced environment and have a keen eye for detail.' }
  ];

  onSubmit() {
    alert('Your application has been submitted!');
  }
}
