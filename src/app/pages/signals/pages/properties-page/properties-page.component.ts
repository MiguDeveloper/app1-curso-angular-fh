import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { User } from '../../interfaces/user.interface';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, JsonPipe, ButtonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export class PropertiesPageComponent implements OnInit {
  counter = signal<number>(10);
  user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });
  email = new FormControl(this.user().email);
  firstName = new FormControl(this.user().first_name);
  lastName = new FormControl(this.user().last_name);
  fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );
  userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} ${this.counter()}`);
  });
  ngOnInit(): void {
    // setInterval(() => {
    //   this.counter.update((current) => current + 1);
    //   if (this.counter() === 20) {
    //     this.userChangedEffect.destroy();
    //   }
    // }, 1000);
    this.email.valueChanges.subscribe((val) => {
      this.user.set({
        ...this.user(),
        email: val ?? '',
      });
    });
    this.firstName.valueChanges.subscribe((val) => {
      this.user.set({
        ...this.user(),
        first_name: val ?? '',
      });
    });
    this.lastName.valueChanges.subscribe((val) => {
      this.user.set({
        ...this.user(),
        last_name: val ?? '',
      });
    });
  }

  updateCounter(value: number) {
    this.counter.update((current) => current + value);
  }
}
