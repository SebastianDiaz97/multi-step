import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {

  mesAno = true
  arcade = true
  advanced = false
  pro = false

  month = [{
    name: "Arcade",
    price: 9
  }, {
    name: "Advanced",
    price: 12
  }, {
    name: "Pro",
    price: 15
  }]
  year = [{
    name: "Arcade",
    price: 90
  }, {
    name: "Advanced",
    price: 120
  }, {
    name: "Pro",
    price: 150
  }]

  priceArcade = '$9/mo'
  priceAdvanced = '$12/mo'
  pricePro = '$15/mo'

  ngOnInit() {
    this.changePrice()
  }

  changePrice() {
    if (this.mesAno) {
      this.priceArcade = `$${this.month[0].price}/mo`
      this.priceAdvanced = `$${this.month[1].price}/mo`
      this.pricePro = `$${this.month[2].price}/mo`
    } else {
      this.priceArcade = `$${this.year[0].price}/yr`
      this.priceAdvanced = `$${this.year[1].price}/yr`
      this.pricePro = `$${this.year[2].price}/yr`
    }
  }


  selected(event: any) {
    // console.log(event.srcElement.id);

    switch (event.srcElement.id) {
      case "arcade":
        if (!this.arcade) {
          this.arcade = !this.arcade;
        }
        this.advanced = false
        this.pro = false
        break;
      case "advanced":
        if (!this.advanced) {
          this.advanced = !this.advanced;
        }
        this.arcade = false
        this.pro = false
        break;
      case "pro":
        if (!this.pro) {
          this.pro = !this.pro;
        }
        this.arcade = false
        this.advanced = false
        break;

      default:
        break;
    }
  }

  checkbox() {
    this.mesAno = !this.mesAno;
    this.changePrice()
  }

  @Output() cambiarPaso = new EventEmitter()
  @Output() planSelected = new EventEmitter()
  siguiente() {
    let datos = [{
      month: this.mesAno, arcade: this.arcade, advanced: this.advanced, pro: this.pro
    }]
    // console.log(datos);
    this.cambiarPaso.emit(3)
    this.planSelected.emit(datos)
  }
  volver() {
    this.cambiarPaso.emit(1)
  }
}
