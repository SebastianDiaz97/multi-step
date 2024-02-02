import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() add: boolean[] = []
  @Input() mesAno: any
  @Input() prices: any
  @Input() paso: any

  plan = ''
  pricePlanes: any
  month = true

  online = false
  sotrage = false
  profile = false

  priceAddOnline: any
  selectOnline: any
  priceAddStorage: any
  selectStorage: any
  priceAddProfile: any
  selectProfile: any

  total = 0

  ngOnInit() {
    // console.log(this.prices[1]);
    this.priceAddOnline = this.prices[1][0].price
    this.priceAddStorage = this.prices[1][1].price
    this.priceAddProfile = this.prices[1][2].price
  }
  // addsSelected = [ this.addOnline , this.addStorage, this.addProfile]

  ngOnChanges() {

    if (this.paso === 4) {

      this.total = 0
      this.month = this.mesAno[0].month;

      this.tipoPlan(this.mesAno[0])

      this.selectProfile = this.add[2]
      this.selectStorage = this.add[1]
      this.selectOnline = this.add[0]
      this.asignarPrecio()
    }
  }

  @Output() cambiarPaso = new EventEmitter()


  volver(paso: number) {
    this.cambiarPaso.emit(paso)
  }

  recargar() {
    location.reload();
  }

  tipoPlan(mesAno: any) {
    if (mesAno.pro) {
      this.plan = "Pro";
      this.pricePlanes = this.prices[0][2].price
    }
    if (mesAno.advanced) {
      this.plan = "Advanced";
      this.pricePlanes = this.prices[0][1].price
    }
    if (mesAno.arcade) {
      this.plan = "Arcade";
      this.pricePlanes = this.prices[0][0].price
    }
  }



  asignarPrecio() {
    if (this.month) {
      this.total = this.pricePlanes + (this.selectProfile ? this.priceAddProfile : 0) + (this.selectStorage ? this.priceAddStorage : 0) + (this.selectOnline ? this.priceAddOnline : 0);
    } else {
      this.total = this.pricePlanes * 10 + (this.selectProfile ? this.priceAddProfile * 10 : 0) + (this.selectStorage ? this.priceAddStorage * 10 : 0) + (this.selectOnline ? this.priceAddOnline * 10 : 0);

    }
  }
}
