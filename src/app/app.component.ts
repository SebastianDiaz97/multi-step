import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-step-angular';

  paso: number = 1

  cambiarPaso(pasos: number){
    this.paso = pasos;
    console.log('cambio');
  }

  // ngOnInit(){
  //   switch (this.paso) {
  //     case value:
        
  //       break;
    
  //     default:
  //       break;
  //   }
  // }
}
