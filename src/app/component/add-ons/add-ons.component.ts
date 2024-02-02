import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent {
  @Input() mesAno: any

  @Output() adds = new EventEmitter()
  @Output() cambiarPaso = new EventEmitter()

  addsSelected:any

  addOnline = false
  addStorage = false
  addProfile = false


  jio(event: any) {
    console.log(event.srcElement.id);
    switch (event.srcElement.id) {
      case 'online':
        this.addOnline = !this.addOnline
        break;
      case 'storage':
        this.addStorage = !this.addStorage
        break;
      case 'profile':
        this.addProfile = !this.addProfile
        break;

      default:
        break;
    }
    // document.getElementById()
  }

  siguiente() {
    this.cambiarPaso.emit(4)
    this.addsSelected = [this.addOnline, this.addStorage, this.addProfile]
    this.adds.emit(this.addsSelected)
  }

  volver() {
    this.cambiarPaso.emit(2)
  }
}
