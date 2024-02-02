import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() cambiarPaso = new EventEmitter();

  submit(event: Event) {
    let validado = this.validarFormualrio()
    if(validado){
      this.cambiarPaso.emit(2)
    }
  }

  validarFormualrio() {
    if (this.name == "") {
      this.vacioName = true;
    } else {
      this.vacioName = false;
    }
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email == "") {
      this.vacioEmail = true;
    } else if (!pattern.test(this.email)) {
      alert("Correo electronico no valido");
      this.vacioEmail = true;
    } else {
      this.vacioEmail = false;
    }

    this.phoneNumber = this.phoneNumber.toString().replace(/[^0-9]/g, '');
    if (this.phoneNumber.length > 10) {
      this.vacioPhone = true;
    } else if (this.phoneNumber.length < 7) {
      this.vacioPhone = true;
    } else {
      this.vacioPhone = false;
    }


    if (!this.vacioName && !this.vacioEmail && !this.vacioPhone) {
      return true;
    } else {
      return false;
    }
  }

  change(value: any) {
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
