import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-step-angular';

  paso: number = 1

  mesAno:any

  add:any

  allInfo:any


  pricePlan = [{
    name: 'arcade',
    price: 9
  }, {
    name: 'advanced',
    price: 12
  }, {
    name: 'pro',
    price: 15
  }]

  priceAdds = [{
    name: 'online',
    price: 1
  }, {
    name: 'storage',
    price: 2
  }, {
    name: 'profile',
    price: 2
  }]




  cambiarPaso(pasos: number) {
    this.paso = pasos;
  }

  planSelected(info: any[]) {
    this.allInfo = info
    this.mesAno = info[0].month
  }
  
  adds(info: any) {
    this.add = info
  }
  
  prices = [this.pricePlan, this.priceAdds]
  

}
