import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contacForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contacForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],

    })
  }

  ngOnInit(): void {
      
  }

  hasErrors(field: string, typeError: string) {
    return this.contacForm.get(field)?.hasError(typeError) && this.contacForm.get(field)?.touched;
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log('Enviado')
  }
}
