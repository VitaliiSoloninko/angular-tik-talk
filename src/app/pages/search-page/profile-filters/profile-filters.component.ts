import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, startWith, Subscription, switchMap } from 'rxjs';
import { ProfileService } from '../../../data/services/profile.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss',
})
export class ProfileFiltersComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  profileService = inject(ProfileService);

  searchForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    skills: [''],
  });

  searchFormSub!: Subscription;

  constructor() {
    this.searchFormSub = this.searchForm.valueChanges
      .pipe(
        startWith({}),
        debounceTime(500),
        switchMap((formValue) => {
          return this.profileService.filterProfiles(formValue);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.searchFormSub.unsubscribe();
  }
}
