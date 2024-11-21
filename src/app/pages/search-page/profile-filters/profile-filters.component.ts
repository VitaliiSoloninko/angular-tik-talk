import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss',
})
export class ProfileFiltersComponent {
  formBuilder = inject(FormBuilder);

  searchForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    skills: [''],
  });

  constructor() {
    //this.searchForm.
  }
}
