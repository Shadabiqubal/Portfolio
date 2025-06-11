import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    emailjs.send(
      'YOUR_SERVICE_ID',     // EmailJS service ID
      'YOUR_TEMPLATE_ID',    // EmailJS template ID
      this.contactForm.value,
      'YOUR_PUBLIC_KEY'      // EmailJS public key
    )
    .then(() => {
      this.isLoading = false;
      alert('Message sent successfully!');
      this.contactForm.reset();
      this.submitted = false;
    }, (error) => {
      this.isLoading = false;
      alert('Failed to send message, please try again.');
      console.error(error);
    });
  }

  // onSubmit(): void {
  //   this.submitted = true;
    
  //   if (this.contactForm.valid) {
  //     this.isLoading = true;
      
  //     // Simulate API call
  //     setTimeout(() => {
  //       this.isLoading = false;
  //       this.contactForm.reset();
  //       this.submitted = false;
        
  //       // Show success message
  //       alert('Your message has been sent successfully!');
  //     }, 2000);
  //   }
  // }
}
