import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Output() formData = new EventEmitter<any>();

  categories: any[] = [
    { value: 'general', name: 'general'},
    { value: 'health', name: 'salud'},
    { value: 'science', name: 'ciencia'},
    { value: 'technology', name: 'tecnología'},
    { value: 'business', name: 'negocios'},
    { value: 'sports', name: 'deportes'},
    { value: 'entertainment', name: 'entretenimiento'}
  ]

countries: any[] = [
    { value: 'ar', name: 'argentina'},
    { value: 'br', name: 'brasil'},
    { value: 'fr', name: 'francia'},
    { value: 'hu', name: 'hungria'},
    { value: 'mx', name: 'mexico'},
    { value: 'gb', name: 'reino Unido'},
  ]

  selectedCategory:string = 'general';
  selectedCountry:string = 'ar';

  constructor() { }

  ngOnInit(): void {
  }

  searchNews(){
    const DATA = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }

    this.formData.emit(DATA);
  }
}
