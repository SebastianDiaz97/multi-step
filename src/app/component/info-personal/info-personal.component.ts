import { Component } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent {
  name = ""
  email = ""
  phoneNumber = ""
  vacioName = false
  vacioEmail = false
  vacioPhone = false

  submit(event: Event) {
    // event.preventDefault()
    this.campoFaltante()
  }

  campoFaltante() {
    this.vacioPhone = this.phoneNumber === '' ? true : false;
    this.vacioName = this.name === '' ? true : false;
    this.vacioEmail = this.email === '' ? true : false;
  }

  change(value: any) {
    // console.log(value.target.id);
    switch (value.target.id) {
      case 'phone':
        this.vacioPhone = this.phoneNumber === '' ? true : false;
        break;
      case 'email':
        this.vacioEmail = this.email === '' ? true : false;

        break;
      case 'name':
        this.vacioName = this.name === '' ? true : false;

        break;

      default:
        console.log('wtf');
        break;
    }
  }
}
